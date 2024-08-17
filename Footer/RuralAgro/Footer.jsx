// Rural Agro Commerce project Footer component
// Change Content,design and logo as necessary

import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-01.png";

const Footer = () => {
  return (
    <footer className="text-white bg-green-950">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-12 items-center mx-auto py-5 md:py-16 gap-2">
          <div className="col-span-12 md:col-span-4 gap-2">
            <div className="grid md:grid-cols-12  items-center justify-center">
              <div className="md:col-span-12 flex justify-center items-center py-4">
                <img
                  src={logo}
                  className=" w-auto h-12 md:w-auto md:h-24  mr-4 md:m-2 rounded-full bg-white"
                  alt="Rural Agro Logo"
                />
                <h2 className="text-lg md:text-2xl font-bold text-yellow-400">
                  {" "}
                  Rural Agro<span className="text-yellow-300">
                    Commerce
                  </span>{" "}
                  <span className="text-xs md:text-sm align-baseline font-light text-amber-200 block ">
                    Harvesting Trust, Delivering Quality
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-2  ps-12 md:ps-24 py-2  gap-4 md:grid-cols-4">
            <div>
              <h2 className="mb-3 md:mb-6  text-xs md:text-sm  font-bold  uppercase">
                Quick Links
              </h2>
              <ul className=" font-normal text-gray-400  text-xs md:text-sm">
                <li className="mb-3 md:mb-6">
                  <Link to="/" className=" hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-3 md:mb-6">
                  <Link to="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li className="mb-3 md:mb-6">
                  <a href="/#deals" className="hover:underline">
                    Deals & Offers
                  </a>
                </li>
                <li className="mb-3 md:mb-6">
                  <a href="/#review" className="hover:underline">
                    Review
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 md:mb-6  text-xs md:text-sm font-bold  uppercase">
                Get to Know Us
              </h2>
              <ul className=" font-normal text-gray-400  text-xs md:text-sm">
                <li className="mb-3 md:mb-6">
                  <a href="/#mission" className="hover:underline">
                    Mission & Vision
                  </a>
                </li>
                <li className="mb-3 md:mb-6">
                  <Link to="/about" className="hover:underline">
                    Our History
                  </Link>
                </li>
                <li className="mb-3 md:mb-6">
                  <Link to="/" className="hover:underline">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 md:mb-6  text-xs md:text-sm font-bold  uppercase ">
                News
              </h2>
              <ul className=" font-normal text-gray-400  text-xs md:text-sm">
                <li className="mb-3 md:mb-6">
                  <Link to="/" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li className="mb-3 md:mb-6">
                  <a href="/#faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-3 md:mb-6">
                  <Link to="/" className="hover:underline">
                    Press Media
                  </Link>
                </li>
                <li className="mb-3 md:mb-6">
                  <Link to="/" className="hover:underline">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 md:mb-6  text-xs md:text-sm font-bold  uppercase ">
                Contact
              </h2>
              <ul className="font-normal text-gray-400  text-xs md:text-sm">
                <li className="mb-3 md:mb-6">
                  <Link to="/contact/#contact" className="hover:underline">
                    Hotline
                  </Link>
                </li>
                <li className="mb-3 md:mb-6">
                  <Link to="/contact/#support" className="hover:underline">
                    Support 24
                  </Link>
                </li>
                <li className="mb-3 md:mb-6">
                  <Link to="/contact" className="hover:underline">
                    Social Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-2 py-5 md:px-4 md:py-12 text-center md:text-left text-white bg-green-900 md:flex md:items-center md:justify-between w-full">
          <span className=" text-xs md:text-sm font-bold text-yellow-400">
            © 2024 <Link to="/home">Rural AgroCommerce™</Link>. All Rights
            Reserved.
          </span>
          <div className="flex mt-3 md:mt-4 justify-center  space-x-5 rtl:space-x-reverse  text-xs md:text-sm">
            <Link to="/privacy" className="text-white">
              Privacy & Policy
            </Link>
            <Link to="/terms" className="text-white">
              Terms & Conditions
            </Link>
            <Link to="/help" className="text-white">
              Help & Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
