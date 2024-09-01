// CraveCourier Project Feedback section
// Change as necessary
const Feedback = () => {
  return (
    <div className="container-fluid md:mt-[90px]">
      <div className="w-full  py-3 md:py-8 text-center">
        <h2 className="text-2xl md:text-4xl py-1 md:py-3 font-bold px-3 md:px-20">
          Our Clients Feedback
        </h2>
        <p className="px-2 md:w-[530px] md:text-sm text-xs mx-auto">
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.
        </p>
      </div>

      <div>
        <h2 className="text-center text-3xl md:text-6xl text-[#FF5331] py-1 md:py-3">
          <i className="fa-solid fa-quote-left"></i>
        </h2>
        <p className="text-center tex-sm md:text-lg md:w-[785px] h-auto mx-auto py-1 md:py-3">
          {" "}
          The app is incredibly user-friendly, and the selection of restaurants
          is impressive. My orders always arrive on time, and the delivery
          drivers are courteous and professional. The real-time tracking feature
          is a game-changer, giving me peace of mind about my delivery status. I
          especially love the frequent deals and discounts they offer.
          CraveCourier has made my life so much easier, and I highly recommend
          it to anyone looking for a reliable and efficient food delivery
          service!
        </p>
      </div>
      <div className="text-center py-3 ">
        <p className="md:text-lg text-md font-bold">Mitchell Marsh</p>
        <p className="text-xs muted">CEO, Bexon Agency</p>
      </div>
      <div className="text-center py-3">
        <button className="btn btn-circle h-6 w-6 md:h-9 md:w-9 rounded-full md:text-2xl bg-[#E2E2E2] mr-3">
          {" "}
          <i className="fa-solid fa-angle-left "></i>
        </button>
        <button className="ml-3 btn btn-circle md:text-2xl h-6 w-6 md:h-9 md:w-9 rounded-full bg-[#FF5331]">
          {" "}
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
