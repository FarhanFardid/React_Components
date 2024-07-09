// Change content and load data as required.
import { useContext } from "react";
import CartContext from "../../../../context/CartProvider/CartProvider";
import "../buyer.css";
import { MdDelete, MdArrowCircleRight } from "react-icons/md";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import { Link } from "react-router-dom";

const CartManagement = () => {
  const {
    cartItems,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleDelete,
    calculateTotalPrice,
  } = useContext(CartContext);

  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Cart Management"
        sub="Shopping Cart Details and Management"
      />
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-3xl py-3 md:py-5">
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map(
                  (item, index) =>
                    item && (
                      <tr key={index}>
                        <th className="text-center">
                          <label>{index + 1}.</label>
                        </th>
                        <td>
                          <div className="avatar flex justify-center">
                            <div className="mask mask-square rounded-md h-12 w-12">
                              <img
                                src={item.img || "default-image.png"}
                                alt="cart_img"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="font-semibold text-center">
                            {item.name}
                          </div>
                        </td>
                        <td>
                          <div className="font-semibold text-center">
                            {item.price} /-
                          </div>
                        </td>
                        <td>
                          <div className="font-semibold text-center flex md:flex-row flex-col justify-center items-center">
                            <button
                              className="bg-red-700  w-3 md:w-5 text-center rounded-btn text-white text-xs md:text-sm"
                              onClick={() => handleDecrementQuantity(index)}
                            >
                              -
                            </button>
                            <span className="py-1 mx-2">{item.quantity}</span>
                            <button
                              className="bg-green-700 w-3 md:w-5 text-center rounded-btn text-white text-xs md:text-sm"
                              onClick={() => handleIncrementQuantity(index)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="font-semibold text-center">
                            {item.unit}
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            {item.id && (
                              <button
                                className=" bg-red-700 rounded-full hover:bg-red-800 p-1"
                                onClick={() => handleDelete(item.id)}
                              >
                                <MdDelete className="text-white w-4 h-4 md:w-5 md:h-5 " />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                )}
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
          <button className="bg-green-600   text-white py-1 px-2 md:py-2 md:px-4 text-sm md:text-lg  font-semibold rounded-lg hover:bg-green-800 hover:scale-110">
            <Link
              to="/dashboard/buyerCheckout"
              className="text-white flex items-center justify-center font-semibold"
            >
              Checkout{" "}
              <MdArrowCircleRight className="h-4 w-4 md:h-6 md:w-6  ms-2 rounded-full" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartManagement;
