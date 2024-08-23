import { Link } from "react-router-dom";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import "../buyer.css";
import { FaArrowCircleRight, FaMoneyBillWaveAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
const BuyerShippingDetails = () => {
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

  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Review and Confirm Shipping Details"
        sub="Verify Your Information Before Proceeding to Payment"
      ></DashboardTitle>

      <div className="details flex flex-col items-center gap-4 text-black  mt-8  w-full  mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-3 md:py-7">
          Confirm Order Shipment Address
        </h1>
        <div className="flex  text-sm md:text-xl font-bold  mb-1 items-center justify-center">
          <label className="font-bold mb-1 text-[#5a9a08]" htmlFor="buyerName">
            Buyer Name:
          </label>
          <input
            className="w-[18rem] md:w-[25rem] p-2 ms-2 mt-1 border border-gray-300 rounded-lg box-border text-sm md:text-xl"
            type="text"
            id="buyerName"
            name="buyerName"
            placeholder="Enter your name"
            required
            value={buyerDetails.name}
          />
        </div>
        <div className="flex  text-sm md:text-xl font-bold  mb-1 items-center justify-center">
          <label className="font-bold mb-1 text-[#5a9a08]" htmlFor="buyerEmail">
            Buyer Email:
          </label>
          <input
            className="w-[18rem] md:w-[25rem] p-2 ms-2 mt-1 border border-gray-300 rounded-lg box-border text-sm md:text-xl"
            type="email"
            id="buyerEmail"
            name="buyerEmail"
            placeholder="Enter your email"
            required
            value={buyerDetails.email}
          />
        </div>
        <div className="flex  text-sm md:text-xl font-bold  mb-1 items-center justify-center">
          <label
            className="font-bold mb-1 text-[#5a9a08]"
            htmlFor="buyerMobile"
          >
            Mobile Number:
          </label>
          <input
            className="w-[18rem] md:w-[25rem] p-2 ms-2 mt-1 border border-gray-300 rounded-lg box-border text-sm md:text-xl"
            id="buyerMobile"
            name="buyerMobile"
            placeholder="Enter your phone number"
            required
            value={buyerDetails.mobileNumber}
          />
        </div>
        <div className="flex  text-sm md:text-xl font-bold  mb-1 items-center justify-center">
          <label
            className="font-bold mb-1 text-[#5a9a08]"
            htmlFor="buyerAddress"
          >
            Address:
          </label>
          <input
            className="w-[18rem] md:w-[25rem] p-2 ms-2 mt-1 border border-gray-300 rounded-lg box-border text-sm md:text-xl"
            id="buyerAddress"
            name="buyerAddress"
            placeholder="Enter your address"
            required
            value={buyerDetails.location}
          />
        </div>
        <div className="my-3 md:my-8">
          <Link to="/dashboard/buyerPaymentsMethod">
            <button className="mx-auto md:w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors  hover:bg-[#4a8206] flex justify-center items-center">
              <FaMoneyBillWaveAlt className="md:h-5 md:w-5 mr-2 md:mr-3" />
              Proceed To Pay{" "}
              <FaArrowCircleRight className="md:h-5 md:w-5 ms-2 md:ms-3 " />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyerShippingDetails;
