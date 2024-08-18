import { useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import { Link } from "react-router-dom";

const BuyerPayments = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };
  // console.log(selectedPayment);
  // console.log(!selectedPayment);
  const handlePaymentSubmit = () => {
    console.log("Selected Payment Method:", selectedPayment);
    // Handle any further logic here, such as redirecting or processing payment
  };
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Payment Method"
        sub="Select Your Preferred Payment Option to Complete Your Purchase"
      ></DashboardTitle>
      <div className="details flex flex-col items-center gap-4 text-black mt-8 w-full mx-auto p-3 md:p-5 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-3 md:py-7">
          Select Preferred Payment Method
        </h1>
        <div className="bg-slate-300 md:p-4 p-2 font-bold rounded-md text-sm md:text-lg">
          <div className="flex justify-center items-center mb-4">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={selectedPayment === "card"}
              onChange={() => handlePaymentSelection("card")}
              className="mr-2"
            />
            <label htmlFor="card">Card</label>
          </div>
          <div className="flex justify-center items-center mb-4">
            <input
              type="radio"
              id="bkash"
              name="paymentMethod"
              value="bkash"
              checked={selectedPayment === "bkash"}
              onChange={() => handlePaymentSelection("bkash")}
              className="mr-2"
            />
            <label htmlFor="bkash">Bkash</label>
          </div>
          <div className="flex justify-center items-center mb-4">
            <input
              type="radio"
              id="nogod"
              name="paymentMethod"
              value="nogod"
              checked={selectedPayment === "nogod"}
              onChange={() => handlePaymentSelection("nogod")}
              className="mr-2"
            />
            <label htmlFor="nogod">Nogod</label>
          </div>
          <div className="flex justify-center items-center mb-4">
            <input
              type="radio"
              id="bankTransfer"
              name="paymentMethod"
              value="bankTransfer"
              checked={selectedPayment === "bankTransfer"}
              onChange={() => handlePaymentSelection("bankTransfer")}
              className="mr-2"
            />
            <label htmlFor="bankTransfer">Bank Transfer</label>
          </div>

          {/* Proceed to Payment button */}
          <Link
            to={
              selectedPayment === "card"
                ? "/dashboard/buyerCardPayment"
                : selectedPayment === "bkash"
                ? "/dashboard/buyerBkashPayment"
                : selectedPayment === "nogod"
                ? "/dashboard/buyerNogodPayment"
                : "/dashboard/buyerBankPayment"
            }
            className="text-green-700 hover:underline mb-2 block"
          >
            <button
              onClick={handlePaymentSubmit}
              className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              hidden={!selectedPayment} // Disable if no payment method selected
            >
              Proceed to Payment
            </button>
          </Link>

          {/* Error message if no payment method selected */}
          {!selectedPayment && (
            <p className="text-red-800">
              Please select a payment method to proceed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyerPayments;
