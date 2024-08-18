import { FiSend } from "react-icons/fi";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";

const ManagerComposeMessage = () => {
    return (
        <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
        <DashboardTitle
          main="Manager Compose Messages Hub"
          sub="Craft and Send Your Messages Easily"
        ></DashboardTitle>
        <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-70 text-black shadow-lg rounded-md ">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Compose New Message
          </h1>
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-xl py-1">
            Or
          </h1>
          <form className="mb-4 text-sm md:text-lg">
            <h2 className="text-center text-[#5a9a08] font-semibold text-base md:text-xl py-3 md:py-5">
              Send A Reply
            </h2>
            <div className="mb-4">
              <label
                className="block font-bold mb-1 text-[#5a9a08]"
                htmlFor="receiver_id"
              >
                Receiver Id:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                type="text"
                id="receiver"
                name="receiver"
                placeholder="Enter Receiver Id"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-1 text-[#5a9a08]"
                htmlFor="message"
              >
                Message Content:
              </label>
              <textarea
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border resize-y"
                id="message"
                name="message"
                placeholder="Enter Your Message"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out flex justify-center items-center hover:bg-[#4a8206]"
            >
              Send Message <FiSend className="h-5 w-5 ms-2 " />
            </button>
          </form>
        </div>
      </div>
    );
};

export default ManagerComposeMessage;