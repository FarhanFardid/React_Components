// Flowbite-React Installation Needed

import { Navbar } from "flowbite-react";
import logo from "../assets/images/logo/logo-2.png";
const Navigation = () => {
  return (
    <Navbar fluid rounded className="bg-green-700">
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-1 md:mr-3 h-12 w-20 md:w-64 md:h-28 rounded-lg"
          alt="Rural AgroCommerce Logo"
        />
        <div>
          <p className="self-center whitespace-nowrap text-lg md:text-3xl font-bold text-yellow-400 ">
            Rural AgroCommerce
          </p>
          <span className="text-xs md:text-sm font-medium text-amber-200 ">
            Harvesting Trust, Delivering Quality
          </span>
        </div>
      </Navbar.Brand>
        <button className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-200 hover:bg-green-500 h-8 w-14 py-1 px-3 md:h-12 md:w-24 md:py-3 md:px-6 text-xs md:text-base   ">
          Login
        </button>
    </Navbar>
  );
};

export default Navigation;
