import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../../components/Headers/DashboardTitle";
import { AuthContext } from "../../../../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const FarmerProfileUpdate = () => {
  const { user } = useContext(AuthContext);
  const [farmerDetails, setFarmerDetails] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  // Farmer Profile Data Load
  useEffect(() => {
    const fetchFarmerData = async () => {
      const response = await fetch(
        `http://localhost:3000/farmers/${user?.email}`
      );
      const data = await response.json();
      // console.log(data);
      setFarmerDetails(data);
    };
    fetchFarmerData();
  }, [user]);
  console.log(farmerDetails);

  // User Profile Data Load
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `http://localhost:3000/users/${user?.email}`
      );
      const data = await response.json();
      setUserDetails(data);
    };
    fetchUserData();
  }, [user]);
  console.log(userDetails);

  // Farmer Profile Data Update
  const updateFarmer = (event) => {
    event.preventDefault();
    // console.log(event);
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log(values);

    // Farmer Profile  Update API Call
    fetch(`http://localhost:3000/farmersProfileUpdate/${farmerDetails._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Farmer Profile Successfully Updated");
        } else {
          toast.error("Farmer Profile Update Failed");
        }
      });

    // User Profile Update API Call
    fetch(`http://localhost:3000/usersProfileUpdate/${userDetails._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("User Profile Successfully Updated");
        } else {
          toast.error("User Profile Update Failed");
        }
      });
  };
  return (
    <div className="custom-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Profile Management"
        sub="Manage Your Personal and Farm Details Information"
      ></DashboardTitle>

      <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-70 text-black shadow-lg rounded-md ">
        <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
          Farmer Profile Info Update
        </h1>
        <form onSubmit={updateFarmer} className="mb-4 text-sm md:text-lg">
          <h2 className="text-center text-[#5a9a08] font-semibold text-md md:text-xl py-3 md:py-5">
            My Farmer Profile
          </h2>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="name"
              name="name"
              defaultValue={farmerDetails.name}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="mobileNumber"
            >
              Mobile Number:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              defaultValue={farmerDetails.mobileNumber}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="email"
            >
              Email (Not Changeable):
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="email"
              id="email"
              name="email"
              value={farmerDetails.email}
              readOnly
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="farmType"
            >
              Farm Type (Not Changeable):
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="text"
              name="farmType"
              value={farmerDetails.farmType}
              readOnly
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="location"
            >
              Location (Not Changeable):
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="location"
              name="location"
              value={farmerDetails.farmLocation}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="photo"
            >
              Photo URL:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="url"
              id="photo"
              name="photo"
              defaultValue={farmerDetails.photo}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out hover:bg-[#4a8206]"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default FarmerProfileUpdate;
