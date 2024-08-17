// FlowBite React Installation Needed
// Rural AgroCommerce Project's Navigation Component
// Backend server side API call Integration, Login and Logout handling Implementation

import { Navbar } from "flowbite-react";
import logo from "../assets/images/logo/logo-01.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `http://localhost:3000/users/${user?.email}`
      );
      const data = await response.json();
      setUserDetails(data);
    };
    fetchUserData();
  }, [user, userDetails]);
  const handleLogout = () => {
    localStorage.removeItem("initialLoginTime");
    logOut()
      .then(() => {
        toast.success("Successfully Logout");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout Failed");
      });
  };
  return (
    <Navbar fluid className="bg-green-700">
      <Navbar.Brand>
        <img
          src={logo}
          className="m-2 md:m-3 md:mr-3 h-14  w-auto md:h-36 rounded-full bg-white hover:scale-110"
          alt="Rural AgroCommerce Logo"
        />
        <div>
          <p className="self-center whitespace-nowrap text-lg md:text-5xl font-bold text-yellow-400 ">
            Rural Agro<span className="text-yellow-300">Commerce</span>
          </p>
          <span className="text-xs md:text-lg font-medium text-amber-200 ">
            Harvesting Trust, Delivering Quality
          </span>
        </div>
      </Navbar.Brand>
      {user ? (
        <div className="flex justify-end ">
          <Tooltip title={userDetails?.name}>
            <img
              src={userDetails?.photo}
              alt="User profile"
              className="md:w-12 md:h-12 w-8 h-8 rounded-full mr-5"
            />
          </Tooltip>
          <button
            onClick={handleLogout}
            className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-200 hover:bg-green-800 h-8 w-14 py-1 px-3 md:h-12 md:w-24 md:py-3 md:px-6 text-xs md:text-base mr-5 hover:scale-110 text-center"
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-200 hover:bg-green-800 h-8 w-14 py-1 px-3 md:h-12 md:w-24 md:py-3 md:px-6 text-xs md:text-base mr-5 hover:scale-110 text-center">
          <Link to="/login"> Login</Link>
        </button>
      )}
    </Navbar>
  );
};

export default Navigation;
