// Change Content and styling as necessary.
import logo from "../assets/images/logo/logo-01.png";
const DashboardNav = () => {
  return (
    <div className="bg-lime-950 grid grid-cols-12 p-3 items-center justify-center">
      <div className="col-span-3">
        <img
          src={logo}
          alt="logo"
          className="md:w-36 md:h-36 md:p-1 w-28 h-28 rounded-full md:mr-3 ps-5 "
        />
      </div>
      <div className="col-span-9">
        <h2 className="text-amber-600 font-bold text-xl md:text-4xl py-2 md:py-5 text-center">
          Rural AgroCommerce
        </h2>
        <p className="text-yellow-300 text-center font-bold  text-base md:text-2xl">
          DashBoard
        </p>
      </div>
    </div>
  );
};

export default DashboardNav;
