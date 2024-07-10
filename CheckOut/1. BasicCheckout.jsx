// Change and Updates content and data as necessary.
import { useContext } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import CartContext from "../../../../context/CartProvider/CartProvider";
import { Link } from "react-router-dom";
import CheckoutList from "./CheckoutList";
import { FaArrowRight } from "react-icons/fa6";
const BuyerCheckout = () => {
  const { cartItems, calculateTotalPrice } = useContext(CartContext);
  console.log(cartItems);
  const totalPrice = () => {
    return cartItems
      .filter((item) => item !== null)
      .reduce(
        (total, item) => total + (item.price * item.quantity),
        0
      ) - 100 + 60;
  };
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Checkout Purchase"
        sub="Fast, Secure, and Hassle-Free Checkout"
      />
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Checkout Details List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Per Unit Price(p)</th>
                <th>Total Unit Quantity(q) </th>
                <th>Total Price (p * q)</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {cartItems &&
                cartItems.map((item, index) => (
                  <CheckoutList
                    key={index}
                    item={item}
                    index={index}
                  ></CheckoutList>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center p-3 md:p-4 mt-2 md:mt-5">
          <div className="relative w-[50rem] h-full flex flex-col bg-black bg-opacity-80  md:rounded-2xl border border-green-700 rounded-lg p-2 md:p-5 ">
            <div className="mt-3 md:mt-4">
              <h1 className="text-center text-white font-semibold text-lg md:text-2xl py-3 md:py-5">
                Checkout Amounts
              </h1>
              <div className="text-center mt-1 md:mt-3 bg-lime-950 text-white p-2 md:p-4 rounded-lg">
                <p className="text-xs md:text-lg text-amber-600 font-bold">
                  {" "}
                  Enter Promo Code for More Discount
                </p>
                <div className="flex gap-4 my-3 justify-center items-center">
                  <input
                    className="h-[2rem] w-[12rem] text-center text-gray-500 border rounded-lg"
                    placeholder="Promo Code"
                  />
                  <button className="bg-[#5a9a08] h-[2rem] px-2 md:px-3 border rounded text-xs font-semibold md:text-sm hover:bg-[#4a8206] hover:scale-105">
                    Apply
                  </button>
                </div>
              </div>
              <div className="my-4 text-amber-600 md:text-lg text-sm font-medium p-3 md:p-5">
                <div className="flex justify-between items-center  py-2">
                  <p>Subtotal Amount</p>
                  <p>{calculateTotalPrice()} /-</p>
                </div>

                <div className="flex justify-between items-center py-2">
                  <p>Delivery Charge</p>
                  <p>60 /-</p>
                </div>
                <div className="flex justify-between  items-center   py-2">
                  <p>Discounts</p>
                  <p>100 /-</p>
                </div>
              </div>
              <hr className="my-2 md:my-4" />
              <div className="flex justify-between text-green-200 items-center font-semibold text-base md:text-xl p-3 md:p-5">
                <p>Total Amount</p>
                <p>{totalPrice()} /-</p>
              </div>
            </div>
            <div className="my-3 md:my-8">
              <Link to="/dashboard/buyerShipping">
                <button className="mx-auto md:w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors  hover:bg-[#4a8206] flex justify-center items-center">
                  Proceed To Pay{" "}
                  <FaArrowRight className="md:h-5 md:w-5 ms-2 md:ms-3 "></FaArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerCheckout;
