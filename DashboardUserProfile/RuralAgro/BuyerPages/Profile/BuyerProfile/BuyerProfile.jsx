import DashboardTitle from "../../../../../components/Headers/DashboardTitle";
import "../../buyer.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../context/AuthProvider/AuthProvider";
const BuyerProfile = () => {
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
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="My Profile"
        sub="Key Information and Personal Details"
      ></DashboardTitle>
      <div className="w-[80%] md:w-[60%] mx-auto my-3 md:my-20 p-6 md:p-20 bg-black bg-opacity-70 text-white shadow-lg rounded-md text-center">
        <div className="flex justify-center w-full">
          <div className="w-full">
            <div>
              <img
                className="w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto mb-4 md:mb-8 bg-black"
                src={buyerDetails.photo}
                alt="Profile Picture"
              />
            </div>
            <div className="details bg-white bg-opacity-60 text-black p-3 md:p-6 rounded-md">
              <h2 className="text-xs md:text-sm font-medium pb-1 md:pb-2 ">
                Buyer_Id: {buyerDetails._id}
              </h2>
              <h2 className="text-base md:text-xl font-bold py-2 md:py-3 ">
                Name: {buyerDetails.name}
              </h2>

              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Email:</strong>{" "}
                <span id="display-email">{buyerDetails.email}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Mobile Number:</strong>{" "}
                <span id="display-mobile-number">
                  {buyerDetails.mobileNumber}
                </span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Address:</strong>{" "}
                <span id="display-location">{buyerDetails.location}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Registration Date:</strong>{" "}
                <span>{buyerDetails.regDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;