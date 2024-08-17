// CarveCourier project Menu card demo
// Change Content,design and logo as necessary

import pizza from "../assets/images/pizza.jpg";
import burger from "../assets/images/burger.jpg";
import sushi from "../assets/images/sushi.jpg";
import pasta from "../assets/images/pasta.jpg";
import salads from "../assets/images/salads.jpg";
import dessert from "../assets/images/dessert.jpg";
import deliveryBoy from "../assets/images/delivery boy.jpg";

const Menu = () => {
  return (
    // Heading part
    <div className="mt-[80px] md:mt-[150px] text-center container-fluid m-0">
      <div className="w-full md:w-[610px]  mx-auto py-5 md:py-8">
        <h2 className="text-2xl md:text-4xl py-1 md:py-3 font-bold px-3 md:px-20">
          More Than <span className="text-[#FF5331]">10,000 </span> Dishes To
          Order!
        </h2>
        <p className="px-2 md:px-16 md:text-md text-xs">
          Welcome to The Biggest Network of Food Ordering & Delivery
        </p>
      </div>
      {/* 1st row of Menu  */}
      <div className="grid grid-cols-12 gap-1 md:gap-4 px-1 py -2 md:px-16 md:py-6 items-center justify-center">
        <div className="col-span-12 md:col-span-7 grid grid-cols-3 md:gap-4 ">
          <div className=" card w-[180px] h-[160px] md:w-[250px] md:h-[250px] bg-base-100 text-center">
            <figure className="px-1 md:px-12">
              <img
                src={pizza}
                alt="pizza"
                className="rounded-xl w-[130px] h-[120px] md:w-[200px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Pizza
              </h2>
            </div>
          </div>
          <div className=" card w-[180px] h-[160px] md:w-[250px] md:h-[250px] bg-base-100 text-center">
            <figure className=" px-1 md:px-12 ">
              <img
                src={burger}
                alt="burger"
                className="rounded-xl w-[130px] h-[120px] md:w-[200px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Burger
              </h2>
            </div>
          </div>
          <div className=" card w-[180px] h-[160px] md:w-[250px] md:h-[250px] bg-base-100 text-center">
            <figure className=" px-1 md:px-12 ">
              <img
                src={sushi}
                alt="sushi"
                className="rounded-xl w-[130px] h-[120px] md:w-[200px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Sushi
              </h2>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-row md:flex-col   items-center">
          <div className="w-[250px] md:w-[400px] text-justify md:text-left ">
            <h2 className="text-sm md:text-xl font-bold p-3 md:p-0 md:mr-12">
              Find <span className="text-[#FF5331]"> deals</span>,{" "}
              <span className="text-[#009B00]"> free delivery</span>, and more
              from our restaurant partners.
            </h2>
          </div>

          <div className="bg-base-100 shadow-md">
            <figure className="md:ml-48">
              <img
                src={deliveryBoy}
                alt="Courier Boy"
                className="w-[230px] h-[120px] md:w-[320px] md:h-[160px]"
              />
            </figure>
          </div>
        </div>
      </div>
      {/* 2nd Row of Menu */}
      <div className="grid grid-cols-12 gap-1 md:gap-4 px-1 py-2 md:px-16 md:py-6 items-center justify-center">
        <div className="col-span-12 md:col-span-5 flex flex-col  items-center">
          <div className="w-auto md:w-[400px] text-left p-2 md:p-0 ">
            <h2 className="text-sm md:text-lg font-normal text-left mr-6 md:mr-12 py-3 md:py-0">
              <span className="block text-2xl md:text-6xl">
                {" "}
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <span className="text-[#FF5331] font-medium"> CraveCourier</span>,
              your go-to food delivery service. Enjoy a wide selection of
              delicious meals from top-rated restaurants, delivered to your
              doorstep with speed and convenience.
            </h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 grid grid-cols-3 md:gap-4 ">
          <div className=" card w-[180px] h-[160px] md:w-[250px] md:h-[250px] bg-base-100 text-center">
            <figure className=" px-1 md:px-12 ">
              <img
                src={pasta}
                alt="pasta"
                className="rounded-xl w-[130px] h-[120px] md:w-[200px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                pasta
              </h2>
            </div>
          </div>
          <div className=" card w-[180px] h-[160px] md:w-[250px] md:h-[250px] bg-base-100 text-center">
            <figure className=" px-1 md:px-12 ">
              <img
                src={salads}
                alt="salads"
                className="rounded-xl w-[130px] h-[120px] md:w-[200px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Salad
              </h2>
            </div>
          </div>
          <div className=" card w-[180px] h-[160px] md:w-[250px] md:h-[250px] bg-base-100 text-center">
            <figure className=" px-1 md:px-12 ">
              <img
                src={dessert}
                alt="dessert"
                className="rounded-xl w-[130px] h-[120px] md:w-[200px] md:h-[150px] mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title font-bold text-xs md:text-lg mt-2 md:mt-3">
                Desserts
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
