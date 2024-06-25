// Change content as necessary

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
    width: "100vw",
  };

  return (
    <div style={backgroundStyle}>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col">
          <h1 className="text-center font-bolder text-6xl mb-6">
            Account type
          </h1>
          <p className="text-center text-3xl">
            Please select which type of profile you want to create
          </p>
        </div>
        <div className="flex gap-12">
          <Link to="/farmerRegister">
            <button className="bg-gradient-to-r from-lime-400 to-lime-700 text-2xl w-64 h-20 flex justify-center items-center rounded-xl">
              I am Farmer
            </button>
          </Link>
          <button className="bg-gradient-to-r from-lime-400 to-lime-700 text-2xl w-64 h-20 flex justify-center items-center rounded-xl">
            I am Buyer
          </button>
          <button className="bg-gradient-to-r from-lime-400 to-lime-700 text-2xl w-64 h-20 flex justify-center items-center rounded-xl">
            I am Area Manager
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
