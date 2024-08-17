// CarveCourier project Newsletter  demo
// Change Content,design and logo as necessary

const Newsletter = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-6  rounded-lg shadow-md bg-[#FFEFEC] w-full h-auto md:h-[302px] py-5 md:mt-[50px]">
        <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
            Subscribe Our Newsletter
          </h2>
          <p className="text-gray-700 md:text-sm text-xs">
            Browse local restaurants and businesses for delivery by entering your
            address below.
          </p>
        </div>
  
        <div className="flex items-center md:w-[480px]">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-[430px] md:h-[52px] "
            placeholder="Enter your email address"
          />
          <button
            type="button"
            className="bg-[#FF5331] hover:bg-red-800 text-white focus:outline-none focus:ring-2 focus:ring-red-300 font-bold rounded-full  text-xs md:text-sm px-3 md:px-7  py-1.5 md:py-4 me-1 md:me-2 mb-1 md:mb-2 btn-xs "
          >
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  