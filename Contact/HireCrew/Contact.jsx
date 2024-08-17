// Hire Crew Project demo Contact section
// Change design , content and logo as necessary

import backgroundImage2 from "../../assets/Images/Background image 2.svg";
import icon8 from "../../assets/Icons/Icon 8.svg";
import icon9 from "../../assets/Icons/Icon 9.svg";
import icon10 from "../../assets/Icons/Icon 10.svg";
const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-6 md:py-24">
      <div className="hero-content flex flex-col-reverse md:flex-row items-center justify-center gap-1">
        <div
          className="flex-1 max-w-96 bg-cover bg-no-repeat bg-center p-6 md:p-10"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        >
          <div className="flex flex-col text-white gap-2 md:gap-4 p-3 md:p-7 w-80 md:w-96">
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              Contact Us
            </h2>
            <p className="text-xs md:text-sm text-center md:text-left font-medium">
              Say Something to start a live chat
            </p>

            <div className="flex justify-start items-center gap-3 md:gap-4">
              <div className="bg-blue-700 w-12 h-10 md:w-16 md:h-12 p-2 md:p-3 rounded-md">
                <img src={icon8} alt="icon" className="md:w-10 md:h-7" />
              </div>
              <div className="flex flex-col gap-1 font-medium mt-4">
                <h3 className="text-base md:text-lg">Company Location</h3>
                <p className="text-xs">
                  Bucureşti Sectorul 1, Strada ING. ZABLOVSCHI, Nr. 10, BIROUL 1
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 md:gap-4">
              <div className="bg-blue-700  w-10 h-10  md:w-14 md:h-12 p-2 md:p-3 rounded-md">
                <img src={icon9} alt="icon" className="md:w-9 md:h-7" />
              </div>
              <div className="flex flex-col gap-1 font-medium mt-4">
                <h3 className="text-base md:text-lg">Phone Number</h3>
                <p className="text-xs">+(40) 7372 28622</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 md:gap-4">
              <div className="bg-blue-700 w-10 h-10  md:w-14 md:h-12 p-2 md:p-3 rounded-md">
                <img src={icon10} alt="icon" className="md:w-9 md:h-7" />
              </div>
              <div className="flex flex-col gap-1 font-medium mt-4">
                <h3 className="text-base md:text-lg">Email Address</h3>
                <p className="text-xs">career@hireandfire.eu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 md:p-8 shadow-2xl ">
          <form className="max-w-xl mx-auto space-y-4 md:p-4">
            <input
              className="w-full p-2 border-2 border-black rounded-md"
              type="text"
              placeholder="  First name"
              required
            />
            <input
              className="w-full p-2 border-2 border-black rounded-md"
              type="email"
              placeholder="  Email"
              required
            />
            <input
              className="w-full p-2 border-2 border-black rounded-md"
              type="number"
              placeholder="  Phone Number"
              required
            />
            <textarea
              className="w-full p-2 border-2 border-black rounded-md"
              placeholder="  Write Your message"
              rows="4"
              required
            ></textarea>
            <div className="">
              <button className="block rounded-md h-7 w-24 md:h-12 md:w-36 text-white bg-blue-900 mt-6 font-medium mx-auto md:text-base  text-xs ">
                Send Message
              </button>
            </div>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contact;
