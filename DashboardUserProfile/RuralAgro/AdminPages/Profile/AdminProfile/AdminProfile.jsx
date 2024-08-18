import DashboardTitle from "../../../../../components/Headers/DashboardTitle";
import "../../admin.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../context/AuthProvider/AuthProvider";
const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const [adminDetails, setAdminDetails] = useState([]);

  // User Profile Data Load
  useEffect(() => {
    const fetchAdminData = async () => {
      const response = await fetch(
        `http://localhost:3000/users/${user?.email}`
      );
      const data = await response.json();
      setAdminDetails(data);
    };
    fetchAdminData();
  }, [user]);
  console.log(adminDetails);

  const [initialLoginTime] = useState(() => {
    // Check if there's a stored value in localStorage
    const storedTime = localStorage.getItem("initialLoginTime");
    if (storedTime) {
      return storedTime;
    }

    // If no storeTime found, generate the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // for AM/PM format
    });

    // Store the value in localStorage for future use
    localStorage.setItem("initialLoginTime", formattedDate);
    return formattedDate;
  });
  return (
    <div className="custom-admin-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
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
                src={adminDetails.photo}
                alt="Profile Picture"
              />
            </div>

            <div className="details bg-white bg-opacity-60 text-black p-3 md:p-6 rounded-md">
              <h2 className="text-xs md:text-sm font-medium pb-1 md:pb-2 ">
                Admin_Id: {adminDetails._id}
              </h2>
              <h2 className="text-base md:text-xl font-bold py-2 md:py-3 ">
                Name: {adminDetails.name}
              </h2>

              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Email:</strong>{" "}
                <span id="display-email">{adminDetails.email}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Mobile Number:</strong>{" "}
                <span id="display-mobile-number">
                  {adminDetails.mobileNumber}
                </span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Last Login Details:</strong>{" "}
                <span id="display-farm-size">{initialLoginTime}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
