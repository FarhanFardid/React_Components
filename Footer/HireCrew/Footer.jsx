// Hire Crew Project demo Footer
// Change design , content and logo as necessary

import logo from "../../assets/Icons/Logo.svg";
import icon3 from "../../assets/Icons/Icon 11.svg";
import icon8 from "../../assets/Icons/Icon 8.svg";
import icon9 from "../../assets/Icons/Icon 9.svg";
import icon10 from "../../assets/Icons/Icon 10.svg";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Industries We Serve",
    "Blog & News",
    "FAQ",
    "Contact Us",
  ];
  const servicesLink = [
    "Permanent Recruitment",
    "Contract Staffing",
    "Housing & Accomodation Support",
    "Compliance and Legal Support",
    "Workforce Planning",
    "Background Checks",
    "Onboarding Support",
  ];
  return (
    <div>
      <footer className="text-white bg-blue-800">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-start mx-auto py-5 md:py-7 gap-5 md:gap-14">
            <div className="md:col-span-4">
              <div className="flex flex-col justify-center pt-2 md:pt-4 p-2 md:p-0">
                <div className="py-1 md:py-4">
                  <img
                    src={logo}
                    className="h-16 md:h-24 ms-4 md:ms-0 rounded-md"
                    alt="Logo"
                  />
                </div>
                <div className="flex flex-col justify-center font-medium">
                  <p className="text-left p-3 md:p-0">
                    Hire & Fire is a cutting-edge job website designed to
                    connect employers with top-tier talent across various
                    industries. Utilizing advanced matching algorithms, it
                    streamlines the hiring process, ensuring quick and effective
                    placements. Employers benefit from efficient tools for
                    posting jobs, screening candidates, and managing
                    applications. Ideal for businesses aiming for growth, Hire &
                    Fire is your go-to resource for all recruitment needs.
                    Please note that it operates on an employer basis and does
                    not provide jobs directly to workers.
                  </p>
                  <button className="block rounded-md h-10 w-24 md:h-12 md:w-28 text-white bg-[#e01133fc] mt-6 font-medium m-2  md:mx-0 text-sm md:text-base">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 md:pt-7 p-2 md:p-0">
              <h2 className="mb-4 md:mb-6 text-lg md:text-2xl font-medium">
                Quick Links
              </h2>
              <hr className="w-[105px] md:w-[130px] -mt-5" />
              <ul className="font-medium md:text-lg text-[#AAA7B1]">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <div className="flex items-center text-white pt-1 md:pt-3">
                      <img
                        src={icon3}
                        alt="icon"
                        className="pe-2 md:pe-1 w-6"
                      />
                      <a href="" className="block py-2 ">
                        {link}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 md:pt-7 pt-1 p-2 md:p-0">
              <h2 className="mb-4 md:mb-6 text-lg md:text-2xl font-medium">
                Our Services
              </h2>
              <hr className=" w-[115px] md:w-[145px] -mt-5" />
              <ul className="font-medium md:text-lg text-[#AAA7B1]">
                {servicesLink.map((link) => (
                  <li key={link}>
                    <div className="flex items-center text-white pt-1 md:pt-3">
                      <img
                        src={icon3}
                        alt="icon"
                        className="pe-2 md:pe-1 w-6"
                      />
                      <a href="" className="block py-2 ">
                        {link}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 md:pt-7 p-3 md:p-0">
              <h2 className="mb-4 md:mb-6 text-lg md:text-2xl font-medium text-center md:text-left">
                Get In Touch
              </h2>
              <div className="flex flex-col justify-center font-medium">
                <p className="text-center md:text-left">
                  Subscribe Our Newsletter to Get Latest Update & News
                </p>

                <div className="flex items-center md:w-[380px] justify-center py-5">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-s-md h-[35px] md:w-[330px] md:h-[50px] "
                    placeholder="Your Email Here"
                  />
                  <button
                    type="button"
                    className="bg-[#e01133fc] text-white font-bold  text-xs md:text-sm px-3 md:px-7  py-1.5 md:py-4 h-[35px] md:h-[50px] rounded-md btn-xs "
                  >
                    Subscribe
                  </button>
                </div>
                <div className="flex justify-start items-center gap-3 md:gap-4 pt-5">
                  <div className="bg-[#e01133fc] w-8 h-8  md:w-9 md:h-9  md:p-1 rounded-full">
                    <img src={icon9} alt="icon" className="md:w-7 md:h-7 p-1" />
                  </div>
                  <p className="text-sm">+40 123 456 789 </p>
                </div>
                <div className="flex justify-start items-center gap-3 md:gap-4 pt-5">
                  <div className="bg-[#e01133fc] w-8 h-8   md:w-9 md:h-9 p-1 rounded-full">
                    <img
                      src={icon10}
                      alt="icon"
                      className="md:w-7 md:h-7 p-1"
                    />
                  </div>
                  <p className="text-sm">contact@hireandfire.agency </p>
                </div>
                <div className="flex justify-start items-center gap-3 md:gap-4 pt-5">
                  <div className="bg-[#e01133fc] w-8 h-8  md:w-12 md:h-10 p-1 rounded-full">
                    <img
                      src={icon8}
                      alt="icon"
                      className="w-7 h-7 md:w-10 md:h-8 "
                    />
                  </div>
                  <p className="text-sm">
                    Strada ING. Zablovschi, Nr. 10, Biroul 1, Sectorul 1,
                    Bucuresti, Romania.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="py-5 md:py-12 text-center md:text-left text-white flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
            <span className="text-sm md:text-base font-medium">
              © Copyright 2024 <a href="">"Hire & Fire"</a> All Rights Reserved.
            </span>
            <div className="flex justify-center  space-x-5 rtl:space-x-reverse text-xs md:text-base font-medium">
              <a href="#" className="text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-white">
                Terms & Conditions
              </a>
              <a href="#" className="text-white">
                Cookie Policy
              </a>
            </div>
            <div className="flex justify-center  space-x-5 rtl:space-x-reverse text-xs md:text-base font-medium">
              <p>Follow Us</p>
              <div className="bg-white inline-block p-1 rounded-full">
                <FaFacebookF className="text-[#e01133] text-sm" />
              </div>
              <div className="bg-white inline-block p-1 rounded-full">
                <AiFillInstagram className="text-[#e01133] text-sm" />
              </div>
              <div className="bg-white inline-block p-1 rounded-full">
                <FaTwitter className="text-[#e01133] text-sm" />
              </div>
              <div className="bg-white inline-block p-1 rounded-full">
                <FaTelegramPlane className="text-[#e01133] text-sm" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
