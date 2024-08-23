import "../buyer.css";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import CartContext from "../../../../context/CartProvider/CartProvider";
import CartList from "./CartList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
const CartManagement = () => {
  const { user } = useContext(AuthContext);
  const [ItemsInCart, setItemsInCart] = useState([]);
  const {
    cartItems,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleDelete,
    calculateTotalPrice,
  } = useContext(CartContext);
  console.log(cartItems);
  
  // Load the updated data in the Cart whenever the cartItems is updated
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/cart/${user?.email}`);
      const data = await response.json();
      const filteredItems = data.filter((item) => item.status === "pending");
      setItemsInCart(filteredItems);
    };
    fetchData();
  }, [cartItems, user]);
  console.log(ItemsInCart);
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Cart Management"
        sub="Shopping Cart Details and Management"
      />
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            My Cart
          </h1>

          <table className="table mt-5 md:mt-10">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price (Tk)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Checkout</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {ItemsInCart.map((item, index) => (
                <CartList
                  key={item._id}
                  item={item}
                  index={index}
                  handleDecrementQuantity={handleDecrementQuantity}
                  handleIncrementQuantity={handleIncrementQuantity}
                  handleDelete={handleDelete}
                ></CartList>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 md:mt-8 flex justify-between items-center mx-8">
          <div className="text-base md:text-xl font-semibold text-green-800">
            Total Price:{" "}
            <span className="text-red-700 font-bold text-lg md:text-2xl">
              {calculateTotalPrice()}
            </span>{" "}
            Tk.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartManagement;
