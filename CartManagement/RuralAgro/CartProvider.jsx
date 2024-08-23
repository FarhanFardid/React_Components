import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    if (userEmail) {
      fetchCartDataFromDB();
    }
  }, [userEmail]);

// Cart data fetch from Database using API Call 
  const fetchCartDataFromDB = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${userEmail}`);
      const data = await response.json();
      const filteredItems =  data.filter((item) => item.status === "pending");
      setCartItems(filteredItems);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  // Save Cart to Database
  const saveCartDataToDB = async (cartItem) => {
    try {
      const response = await fetch(`http://localhost:3000/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });
      const data = await response.json();
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success",
          text: "New Product added to Cart Successfully ",
          icon: "success",
          confirmButtonText: "Cool",
        });
        fetchCartDataFromDB();
      }
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };

  // Update the Quantity of Stored Cart Data 
  const updateCartItemInDB = async (cartItem) => {
    try {
      const response = await fetch(
        `http://localhost:3000/cart/${cartItem._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartItem),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Cart Product's Quantity Updated");
        fetchCartDataFromDB();
      }
    } catch (error) {
      console.error("Error updating cart data:", error);
    }
  };

  // Delete Specific Product from Stored Cart
  const deleteCartItemFromDB = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      if (data.deletedCount > 0) {
        Swal.fire("Deleted!", "Product has been removed from Cart.", "success");
        fetchCartDataFromDB();
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleAddToCart = (item) => {
    if (cartItems.length === 0) {
      const newCartItem = {
        ...item,
        quantity: 1,
      };
      saveCartDataToDB(newCartItem);
    } else {
      const existingCartItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );
      if (existingCartItemIndex !== -1) {
        const cartItemToUpdate = {
          ...cartItems[existingCartItemIndex],
          quantity: cartItems[existingCartItemIndex].quantity + 1,
        };
        // Update the existing item in the database
        updateCartItemInDB(cartItemToUpdate); 
      } else {
        const newCartItem = {
          ...item,
          quantity: 1,
        };
         // Save the new item to the database
        saveCartDataToDB(newCartItem);
      }
    }
  };

  // Update The product quantity stored in the Cart Database
  const handleIncrementQuantity = (index) => {
    if (index < 0 || index >= cartItems.length) {
      console.error("Invalid index:", index);
      return;
    }
    cartItems.map((item, idx) => {
      if (idx === index) {
        const updatedItem = {
          ...item,
          quantity: item.quantity + 1,
        };
        // Update the item in the database
        updateCartItemInDB(updatedItem); 
        return updatedItem;
      }
      return item;
    });
  };

  const handleDecrementQuantity = (index) => {
    if (index < 0 || index >= cartItems.length) {
      console.error("Invalid index:", index);
      return;
    }
    cartItems
      .map((item, idx) => {
        if (idx === index) {
          const updatedItem = {
            ...item,
            quantity: item.quantity - 1,
          };
          if (updatedItem.quantity <= 0) {
            // Optionally remove the item from the database if quantity is 0 or less
            deleteCartItemFromDB(updatedItem._id);
            return null;
          }
           // Update the item in the database
          updateCartItemInDB(updatedItem);
          return updatedItem;
        }
        return item;
      })
      // Remove any null values (items with quantity <= 0)
      .filter(Boolean); 
  };

  const handleDelete = (cartItem) => {
    try {
      deleteCartItemFromDB(cartItem._id);
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };
  const calculateTotalPrice = () => {
    return cartItems
      .filter((item) => item !== null)
      .reduce((total, item) => total + item.productPrice * item.quantity, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleIncrementQuantity,
        handleDecrementQuantity,
        handleDelete,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
