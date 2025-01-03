import { FiSend } from "react-icons/fi";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManagerComposeMessage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleMessageSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const receiverEmail = form.receiverEmail.value;
    const message = form.message.value;
    const senderEmail = user.email;
    const timeStamp = new Date().toLocaleString();
    const reply = "";
    const messageInfo = {
      senderEmail,
      receiverEmail,
      message,
      timeStamp,
      reply,
    };
    console.log(messageInfo);
    fetch(`http://localhost:3000/messages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(messageInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Message Sent Successfully ",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/dashboard/managerSentMessages");
          form.reset();
        }
      });
  };
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
        <form onSubmit={handleMessageSend} className="mb-4 text-sm md:text-lg">
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="receiverEmail"
            >
              Receiver Email:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="email"
              id="receiverEmail"
              name="receiverEmail"
              placeholder="Enter Buyer Email Address"
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
