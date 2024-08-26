import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import CheckoutList from "./CheckoutList";
import { FaMoneyCheck } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const BuyerCheckout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [buyerDetails, setBuyerDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/buyers/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setBuyerDetails(data);
    };
    fetchData();
  }, [user]);
  console.log(buyerDetails);
  const cartProduct = useLoaderData();
  const productInfo = [cartProduct];
  console.log(productInfo);
  const subTotal = () => {
    return cartProduct.productPrice * cartProduct.quantity;
  };
  const totalPrice = () => {
    return (
      cartProduct.productPrice * cartProduct.quantity -
      20 +
      10 * cartProduct.quantity
    );
  };
  // Get the current date and time
  const now = new Date();
  const orderPlacedOn = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(
    now.getHours()
  ).padStart(2, "0")}:00`;
  // Calculate the estimated delivery date (5 days later)
  const estimatedDeliveryDate = new Date(now);
  estimatedDeliveryDate.setDate(now.getDate() + 5);
  const formattedEstimatedDeliveryDate = `${estimatedDeliveryDate.getFullYear()}-${String(
    estimatedDeliveryDate.getMonth() + 1
  ).padStart(2, "0")}-${String(estimatedDeliveryDate.getDate()).padStart(
    2,
    "0"
  )}`;

  const handleOrderConfirm = () => {
    //  Product quantity check in the database
    fetch(
      `http://localhost:3000/productQuantityCheck/${cartProduct.productId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ cartProQuantity: cartProduct.quantity }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.isQuantityAvailable) {
          const orderDetails = {
            buyerId: buyerDetails._id,
            buyerEmail: buyerDetails.email,
            buyerContact: buyerDetails.mobileNumber,
            deliveryLocation: buyerDetails.location,
            warehouseLocation: cartProduct.farmerLocation,
            productId: cartProduct.productId,
            cartListId: cartProduct._id,
            productName: cartProduct.productName,
            productImg: cartProduct.productImage,
            productQuantity: cartProduct.quantity,
            productUnit: cartProduct.productUnit,
            totalPayment: totalPrice(),
            PaymentMethod: "Cash on Delivery",
            orderPlacedDate: orderPlacedOn,
            estimatedDeliveryDate: formattedEstimatedDeliveryDate,
            deliveryStatus: "In Transit",
          };
          console.log(orderDetails);
          fetch(`http://localhost:3000/orders`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(orderDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Success",
                  text: "New Order is Placed Successfully ",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                navigate("/dashboard/buyerOrders");
              }
            });

          fetch(`http://localhost:3000/cartStatus/${cartProduct._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                toast.success("Cart Product's Status Updated");
              }
            });
          // Reduce the product quantity in the database after Order Confirmation
          fetch(
            `http://localhost:3000/productQuantityUpdate/${cartProduct.productId}`,
            {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ decreaseQuantity: cartProduct.quantity }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                toast.success(
                  "Product Quantity Updated After Order Placement."
                );
              }
            });
        } else {
          //   warning  and stop execution if product quantity is not available for order
          Swal.fire({
            title: "Warning",
            text: "Insufficient Product Quantity in Stock.",
            icon: "warning",
            confirmButtonText: "OK",
          });
        }
      });
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
                <th>Unit Price(p)</th>
                <th>Unit Quantity(q) </th>
                <th>Total Price (p * q)</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {productInfo &&
                productInfo.map((item, index) => (
                  <CheckoutList
                    key={item._id}
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
                Purchase Amounts
              </h1>
              {/* To Do - Promo code application in total payment calculation */}
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
                  <button
                    onClick={() => alert("This Feature is Under Development")}
                    className="bg-[#5a9a08] h-[2rem] px-2 md:px-3 border rounded text-xs font-semibold md:text-sm hover:bg-[#4a8206] hover:scale-105"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="my-4 text-amber-600 md:text-lg text-sm font-medium p-3 md:p-5">
                <div className="flex justify-between items-center  py-2">
                  <p>Subtotal Amount</p>
                  <p> {subTotal()} /-</p>
                </div>

                <div className="flex justify-between items-center py-2">
                  <p>Delivery Charge [10/- per Kg] (+)</p>
                  <p>{10 * cartProduct.quantity} /-</p>
                </div>
                <div className="flex justify-between  items-center   py-2">
                  <p>Discounts (-)</p>
                  <p>20 /-</p>
                </div>
              </div>
              <hr className="my-2 md:my-4" />
              <div className="flex justify-between text-green-200 items-center font-semibold text-base md:text-xl p-3 md:p-5">
                <p>Total Amount</p>
                <p>{totalPrice()} /-</p>
              </div>
              <div className="flex justify-between text-green-200 items-center font-semibold text-base md:text-xl p-3 md:p-5">
                <p>Payment Method </p>
                <p>Cash on Delivery</p>
              </div>
            </div>
            <div className="my-3 md:my-8">
              {/* <Link to="/dashboard/buyerShipping"> */}
              <button
                onClick={handleOrderConfirm}
                className="mx-auto md:w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors  hover:bg-[#4a8206] flex justify-center items-center"
              >
                Confirm Order{" "}
                <FaMoneyCheck className="md:h-5 md:w-5 ms-2 md:ms-3 "></FaMoneyCheck>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerCheckout;
