// Change contact Form info and styling as necessary.
import React from "react";

const ContactForm = () => {
  return (
    <div className="mb-8 p-4 md:p-8">
      <h2 className="text-xl md:text-4xl font-bold mb-4 text-center text-green-600 py-3 md:py-5">
        Contact Form
      </h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
        <button className="w-full p-2  bg-green-900 text-white btn-md rounded-lg font-bold  hover:text-amber-400 hover:bg-green-700 hover:scale-105 h-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
