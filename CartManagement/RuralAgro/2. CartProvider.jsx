import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const handleAddToCart = (item) => {
    if (!item || !item.id) {
      console.error("Invalid item:", item);
      return;
    }

    const currentCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingCartItemIndex = currentCartItems.findIndex(
      (cartItem) => cartItem && cartItem.id === item.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = currentCartItems.map((cartItem, index) => {
        if (index === existingCartItemIndex) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = {
        ...item,
        quantity: 1,
      };
      const newCartItems = [...currentCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setCartItems(newCartItems);
    }
  };

  const handleIncrementQuantity = (index) => {
    const currentCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    if (index < 0 || index >= currentCartItems.length) {
      console.error("Invalid index:", index);
      return;
    }
    const updatedCartItems = currentCartItems.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleDecrementQuantity = (index) => {
    const currentCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    if (index < 0 || index >= currentCartItems.length) {
      console.error("Invalid index:", index);
      return;
    }
    const updatedCartItems = currentCartItems
      .map((item, idx) => {
        if (idx === index) {
          const updatedItem = {
            ...item,
            quantity: item.quantity - 1,
          };
          if (updatedItem.quantity <= 0) {
            return null;
          }
          return updatedItem;
        }
        return item;
      })
      .filter(Boolean);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleDelete = (id) => {
    const filteredCartItems = cartItems.filter(
      (item) => item && item.id !== id
    );
    setCartItems(filteredCartItems);
    localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
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
