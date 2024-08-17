// Hire Crew Project demo Banner2 component
// Change Content,design and logo as necessary

import backgroundImage from "../../assets/Images/Background image 1.svg";
import icon2 from "../../assets/Icons/Icon 2.svg";
const Header = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center flex items-center p-6 md:p-12 w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto text-center">
        {" "}
        <h2 className="text-white font-semibold text-2xl md:text-4xl mb-2 md:mb-4">
          Construction
        </h2>
        <ul className="flex  justify-center items-center font-medium p-1 md:p-0 md:space-x-3  md:mt-0  text-sm md:text-lg text-white">
          <li>
            <div className="flex items-center text-white">
              <a href="" className="block py-2 ">
                Home
              </a>
              <img
                src={icon2}
                alt="icon2"
                className="pe-2 ps-1 md:ps-2 md:pe-0 w-7"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center text-white">
              <a href="" className="block py-2 ">
                Industry
              </a>
              <img
                src={icon2}
                alt="icon2"
                className="pe-2 ps-1 md:ps-2 md:pe-0 w-7"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center text-white">
              <a href="" className="block py-2 ">
                Construction
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
