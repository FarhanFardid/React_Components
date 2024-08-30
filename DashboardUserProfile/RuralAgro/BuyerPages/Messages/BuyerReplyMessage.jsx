import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import { FiSend } from "react-icons/fi";

const BuyerReplyMessage = () => {
  const loadedMessage = useLoaderData();
  console.log(loadedMessage);
  const { _id, senderEmail, message } = loadedMessage;
  const navigate = useNavigate();
  const handleReply = (e) => {
    e.preventDefault();
    const form = e.target;
    const reply = form.reply.value;
    const updatedTimeStamp = new Date().toLocaleString();
    console.log("The reply for message", _id, "is ", reply);
    fetch(`http://localhost:3000/messageReplyUpdate/${loadedMessage._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ reply, updatedTimeStamp }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Reply Message is Sent Successfully ",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          navigate("/dashboard/buyerReceivedMessages");
        }
      });
  };
  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Buyer Message Reply Hub"
        sub="Reply to Received Messages Easily"
      ></DashboardTitle>
      <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-70 text-black shadow-lg rounded-md ">
        <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
          Send A Reply
        </h1>
        <form onSubmit={handleReply} className="mb-4 text-sm md:text-lg">
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="sender_email"
            >
              Sender Email :
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="sender_email"
              name="sender_email"
              placeholder="Sender Email"
              readOnly
              value={senderEmail}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border resize-y"
              id="message"
              name="message"
              placeholder="Enter Your Message"
              rows={2}
              readOnly
              value={message}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="reply"
            >
              Reply:
            </label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border resize-y"
              id="reply"
              name="reply"
              placeholder="Enter Your Reply"
              rows={3}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out flex justify-center items-center hover:bg-[#4a8206]"
          >
            Send Reply <FiSend className="h-5 w-5 ms-2 " />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyerReplyMessage;
