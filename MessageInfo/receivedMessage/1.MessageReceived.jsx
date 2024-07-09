// Change and create component as necessary.
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import MessageList from "./MessageList";

const BuyerReceivedMessage = () => {
  const receivedMsgInfo = [
    {
      msg_id: "M001",
      sender_id: "S123",
      msgContent: "Hello, your order with id O345 has been shipped.",
      msgTimeStamp: "2024-07-08 10:30:00",
    },
    {
      msg_id: "M002",
      sender_id: "S124",
      msgContent: "Your order with Id O123 has been canceled",
      msgTimeStamp: "2024-07-08 11:45:00",
    },
    {
      msg_id: "M003",
      sender_id: "S125",
      msgContent: "Your payment has been received. Thank you!",
      msgTimeStamp: "2024-07-08 12:20:00",
    },
  ];
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Received Messages Hub"
        sub="View and Manage Your Incoming Communication"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Received Messages
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Message Id</th>
                <th>Sender Id</th>
                <th>Message</th>
                <th>Message Timestamp</th>
                <th>Reply</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {receivedMsgInfo.map((message, index) => (
                <MessageList key={index} message={message} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuyerReceivedMessage;
