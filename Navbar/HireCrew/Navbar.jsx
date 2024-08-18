// Hiring Company Demo UI Page Navbar
// Change logo and contents as necessary

import logo from "../../assets/Icons/Logo.svg";
import countryImg from "../../assets/Icons/Country Icon.svg";
import icon1 from "../../assets/Icons/Icon 1.svg";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-2xl flex flex-col md:flex-row  items-center justify-between mx-auto p-4">
          <div className="flex items-center justify-center">
            <img src={logo} className="h-10 md:h-14" alt="logo" />
            <span className="self-center text-xl md:text-3xl font-semibold whitespace-nowrap ps-2">
              Hire Crew
            </span>
          </div>
          <div className="flex items-center justify-center order-2">
            <img
              className="w-6 h-6 md:w-8 md:h-8 rounded-full"
              src={countryImg}
              alt="country flag Image"
            />
            <button type="button">
              <img
                src={icon1}
                alt="icon1"
                className="mt-3 md:mt-5 w-3 md:w-4"
              />
            </button>
          </div>
          <div className="items-center justify-between  w-full md:flex md:w-auto order-1">
            <ul className="flex flex-col justify-center items-center font-semibold  border border-gray-100 rounded-lg  md:space-x-8  md:flex-row md:border-0 bg-white text-black text-xs md:text-base p-2">
              <li>
                <a
                  href="#"
                  className="block py-1 md:py-2 px-1 hover:text-blue-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="block py-1 md:py-2 px-1 hover:text-blue-700"
                  >
                    Employers
                  </a>
                  <img
                    src={icon1}
                    alt="icon1"
                    className="mt-1 md:mt-2 w-3 md:w-4"
                  />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="block py-1 md:py-2 px-1 hover:text-blue-700"
                  >
                    Find Worker
                  </a>
                  <img
                    src={icon1}
                    alt="icon1"
                    className="mt-1 md:mt-2 w-3 md:w-4"
                  />
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 md:py-2 px-1 hover:text-blue-700 text-red-500"
                >
                  Industry
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="block py-1 md:py-2 px-1  hover:text-blue-700"
                  >
                    Resources
                  </a>
                  <img
                    src={icon1}
                    alt="icon1"
                    className="mt-1 md:mt-2 w-3 md:w-4"
                  />
                </div>
              </li>
              <li>
                <button
                  href="#"
                  className="block md:p-0 rounded-md h-7 w-20 md:h-12 md:w-32 text-white bg-blue-900 mt-2 md:mt-0"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
