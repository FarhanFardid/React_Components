// HireCrew project Newsletter  demo
// Change Content,design and logo as necessary

import backgroundImage1 from "../../assets/Images/Background image 1.svg";
const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-6  rounded-md shadow-md  bg-cover bg-no-repeat bg-center w-full h-auto md:h-[302px] py-5 md:mt-[50px]"
    style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <div className="flex flex-col mb-4 md:mb-0 md:mr-4 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
          Subscribe Our Newsletter
        </h2>
        <p className="md:text-base text-xs">
          Explore exciting career opportunities in construction by entering your
          information.
        </p>
      </div>

      <div className="flex items-center md:w-[480px] justify-center gap-2">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg   md:w-[430px] md:h-[52px] "
          placeholder="Enter your email address"
        />
        <button
          type="button"
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold  text-xs md:text-sm px-3 md:px-7  py-1.5 md:py-4 rounded-md btn-xs "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
