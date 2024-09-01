import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/authentication/authenticationBackground.jpg";

const Authentication = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2rem",
  };

  return (
    <div style={backgroundStyle}>
      <div className="flex flex-col gap-16 md:gap-28">
        <div className="flex flex-col bg-black p-6 md:p-10 rounded-2xl bg-opacity-50">
          <h1 className="text-center font-semibold text-3xl md:text-6xl mb-6 text-yellow-500">
            Account type
          </h1>
          <p className="text-center text-base md:text-3xl text-white font-medium">
            Please select which type of profile you want to create
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 justify-center items-center">
          <Link to="/farmerRegister">
            <button className="bg-gradient-to-r from-lime-400 to-lime-700 text-sm md:text-xl text-amber-800 font-bold w-40 h-12 md:w-52 md:h-16 flex justify-center items-center rounded-xl hover:scale-110">
              Farmer
            </button>
          </Link>
          <Link to="/buyerRegister">
            <button className="bg-gradient-to-r from-lime-400 to-lime-700 text-sm md:text-xl text-amber-800 font-bold w-40 h-12 md:w-52 md:h-16 flex justify-center items-center rounded-xl hover:scale-110">
              Buyer
            </button>
          </Link>
          <Link to="/managerRegister">
            <button className="bg-gradient-to-r from-lime-400 to-lime-700 text-sm md:text-xl text-amber-800 font-bold w-40 h-12 md:w-52 md:h-16 flex justify-center items-center rounded-xl hover:scale-110">
              Area Manager
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
