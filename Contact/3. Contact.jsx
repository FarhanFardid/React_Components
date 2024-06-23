// Change style and contents as necessary.

import Title from "../../components/Headers/Title";
const Contact = () => {
  return (
    <div className="pt-5 md:pt-10">
      <Title
        main="Contact Us"
        sub="We’re here to help! Reach out to us through any of the following methods, and we’ll get back to you as soon as possible"
      ></Title>
      {/* Basic Contact Info Section */}
      <div className="flex justify-around mb-8 pt-5 md:pt-16  p-2 md:p-8">
        <div className="text-center bg-slate-100 p-2 md:p-5 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
            Our Address
          </h2>
          <div className="text-sm md:text-base font-medium text-green-600">
            <p>RuralAgro Commerce</p>
            <p>123 Rural Lane</p>
            <p>Kawran Bazar, Dhaka-1215.</p>
          </div>
        </div>
        <div className="text-center bg-slate-100 p-2 md:p-5 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
            Phone
          </h2>
          <p className="text-sm md:text-base font-medium text-green-600">
            Call us at: 123 456-7890
          </p>
        </div>
        <div className="text-center bg-slate-100 p-2 md:p-5  rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
            Email
          </h2>
          <div className="text-sm md:text-base font-medium  text-green-600">
            <p>For Queries: info@ruralagro.com</p>
            <p>For Support: support24@ruralagro.com</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8 bg-slate-100 p-4 md:p-7 rounded-lg">
        <h2 className="text-lg md:text-2xl font-semibold py-2 md:py-3 text-amber-600">
          Customer Support Hours
        </h2>
        <div className="text-sm md:text-base font-medium text-green-600">
          <p>Saturday to Thursday: 24 Hours</p>
          <p>Friday: Closed</p>
        </div>
      </div>
      {/* Contact Form section */}
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
      {/* embedded Map Section  */}
      <div className="text-center mb-3">
        <h2 className="text-xl md:text-4xl font-bold mb-4 text-center text-green-600  md:py-5">
          Find Us Here
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.671261061211!2d90.39298181445683!3d23.75162759459513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c750dfbe59ef%3A0x378b31b65d440a3!2sKarwan%20Bazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620223630787!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-80 pt-3"
        ></iframe>
      </div>
      {/* Newsletter section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-6  rounded-lg shadow-md bg-green-100 w-full md:h-72 pt-3 ">
        <div className="flex flex-col py-4 md:mb-0 md:mr-4">
          <h2 className="text-xl md:text-4xl font-bold mb-2 text-center md:text-left text-amber-600">
            Subscribe Our Newsletter
          </h2>
          <p className="text-gray-700 md:text-sm text-xs font-semibold text-center">
            Stay up-to-date with the latest news, offers, and products from
            Rural AgroCommerce. Enter your email below to subscribe to our
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
    </div>
  );
};

export default Contact;
