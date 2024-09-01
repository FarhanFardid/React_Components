// Change Image and Content as necessary.
import Footer from "../../Shared/Footer";
import Navigation from "../../Shared/Navigation";
import NavLinks from "../../Shared/NavLinks";
import errorImg from "../../assets/images/others/errorImg.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navigation></Navigation>
      <NavLinks></NavLinks>
      <div className="max-w-full relative">
        <img src={errorImg} alt="ErrorImage" className="w-full" />
        <div className="absolute bottom-2 md:bottom-8 right-6 md:right-64 bg-slate-900 rounded-md p-1 md:p-3 hover:scale-105">
          {" "}
          <Link to="/">
            {" "}
            <button className="text-xs md:text-2xl font-medium text-white flex justify-center items-center ">
              <FaArrowLeft className="md:w-5 md:h-5 mr-1 md:mr-3"></FaArrowLeft>{" "}
              Go Back to Home{" "}
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
