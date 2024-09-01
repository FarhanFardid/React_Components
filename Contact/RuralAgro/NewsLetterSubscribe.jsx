import React from "react";

const NewsLetterSubscribe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-6  rounded-lg shadow-md bg-green-100 w-full md:h-72 pt-3 ">
      <div className="flex flex-col py-4 md:mb-0 md:mr-4">
        <h2 className="text-xl md:text-4xl font-bold mb-2 text-center md:text-left text-amber-600">
          Subscribe Our Newsletter
        </h2>
        <p className="text-gray-700 md:text-sm text-xs font-semibold text-center">
          Stay up-to-date with the latest news, offers, and products from
          RuralAgro Commerce. Enter your email below to subscribe to our
          newsletter.
        </p>
      </div>
      <div className="flex justify-center items-center md:w-[480px] pb-5">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 md:w-[430px] md:h-[52px] me-2 "
          placeholder="Enter your email address"
        />
        <button
          type="button"
          className=" text-white focus:ring-2 font-bold rounded-full me-1 md:me-2 md:mb-2  w-auto p-2  bg-green-900  btn-md  hover:text-amber-400 hover:bg-green-700 hover:scale-105 h-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default NewsLetterSubscribe;
