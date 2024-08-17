// Food Delivery project carve Courier Footer
// Change design , content and logo as necessary
import apple from "../assets/images/As.png";
import google from "../assets/images/Gp.png";
import logo from "../assets/images/craveCourier.jpg";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[#000000]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-12 items-center mx-auto py-5 md:py-16 gap-2">
            <div className="col-span-12 md:col-span-4 gap-2">
              <div className="grid md:grid-cols-12  items-center justify-center">
                <div className="md:col-span-12 flex justify-center items-center py-4">
                  <img
                    src={logo}
                    className="h-8 md:h-16 mr-4 rounded-md"
                    alt="Crave Courier Logo"
                  />
                  <h2 className="text-lg md:text-2xl font-bold">
                    {" "}
                    CraveCourier{" "}
                    <span className="text-xs md:text-sm align-baseline ">
                      Food Delivery
                    </span>
                  </h2>
                </div>

                <div className=" md:col-span-12 grid grid-cols-2">
                  <div className="col-span-1 flex justify-center">
                    {" "}
                    <img
                      src={apple}
                      alt="Apple store img"
                      className="w-25 h-10 md:w-36 md:h-14 bg-white rounded-xl"
                    ></img>
                  </div>
                  <div className="col-span-1 flex justify-center ">
                    {" "}
                    <img
                      src={google}
                      alt="google play img"
                      className="w-25 h-10 md:w-36 md:h-14  rounded-xl"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-2  ps-24 py-2  gap-4 md:grid-cols-4">
              <div>
                <h2 className="mb-3 md:mb-6 text-sm  font-bold  uppercase">
                  Quick Links
                </h2>
                <ul className=" font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className=" hover:underline">
                      Features
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Food Menu
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Offer
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Review
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Rider
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold  uppercase">
                  Get to Know Us
                </h2>
                <ul className=" font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Gift Cards
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      DoorDash Stories
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Glassdoor
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold  uppercase ">News</h2>
                <ul className=" font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Lift Media
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Press
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold  uppercase ">Contact</h2>
                <ul className="font-normal text-[#AAA7B1]">
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      WhatsApp
                    </a>
                  </li>
                  <li className="mb-3 md:mb-6">
                    <a href="#" className="hover:underline">
                      Support 24
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-2 py-5 md:px-4 md:py-12 text-center md:text-left bg-black text-white md:flex md:items-center md:justify-between">
            <span className="text-sm font-bold">
              © 2024 <a href="">CraveCourier™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-3 md:mt-4 justify-center  space-x-5 rtl:space-x-reverse">
              <a href="#" className="text-white">
                Privacy
              </a>
              <a href="#" className="text-white">
                Policy
              </a>
              <a href="#" className="text-white">
                Terms
              </a>
              <a href="#" className="text-white">
                Services
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
