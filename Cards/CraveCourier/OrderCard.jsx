// CarveCourier project Order card demo
// Change Content,design and logo as necessary

import location from "../assets/images/location.png";
import selection from "../assets/images/select.jpg";
import food from "../assets/images/food.jpg";
import home from "../assets/images/home delivery.png";
const Order = () => {
  return (
    <div className="mt-[30px] container-fluid">
      <div className="w-full  text-center py-5 md:py-8">
        <h2 className="text-2xl md:text-4xl py-1 md:py-3 font-bold px-1 md:px-8 text-[#2E2C49]">
          How To Order?
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-1 px-1 py -2 md:px-5 md:py-6 justify-around">
        <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 justify-center">
          <div className=" card w-[200px] h-[180px]  bg-base-100 text-center mx-auto">
            <h5 className="text-left text-lg md:text-3xl font-bold">
              <span className="badge badge-xs text-[#FF5331]">01</span>
            </h5>
            <figure className="px-1 md:px-12">
              <img
                src={location}
                alt="Location Logo"
                className="rounded-xl w-[120px] h-[100px] md:w-[160px] md:h-[150px]  mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Choose your location
              </h2>
            </div>
          </div>
          <div className=" card w-[200px] h-[180px] bg-base-100 text-center mx-auto">
            <h5 className="text-left text-lg md:text-3xl font-bold">
              <span className="badge badge-xs text-[#FF5331]">02</span>
            </h5>
            <figure className=" px-1 md:px-12 ">
              <img
                src={selection}
                alt="select img"
                className="rounded-xl  w-[120px] h-[100px] md:w-[160px] md:h-[150px]  mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Choose what to eat
              </h2>
            </div>
          </div>
          <div className=" card w-[200px] h-[180px] bg-base-100 text-center mx-auto">
            <h5 className="text-left text-lg md:text-3xl font-bold">
              <span className="badge badge-xs text-[#FF5331]">03</span>
            </h5>
            <figure className=" px-1 md:px-12 ">
              <img
                src={food}
                alt="Food img"
                className="rounded-xl w-[120px] h-[100px] md:w-[160px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Place your first order
              </h2>
            </div>
          </div>
          <div className=" card w-[200px] h-[180px] bg-base-100 text-center mx-auto">
            <h5 className="text-left text-lg md:text-3xl font-bold">
              <span className="badge badge-xs text-[#FF5331]">04</span>
            </h5>
            <figure className=" px-1 md:px-12 ">
              <img
                src={home}
                alt="Home Delivery img"
                className="rounded-xl w-[120px] h-[100px] md:w-[160px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Now! your food in way
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
