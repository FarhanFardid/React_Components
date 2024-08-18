import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import ManagerSentMsgList from "./ManagerSentMsgList";

const ManagerSentMessage = () => {
  const sentMsgInfo = [
    {
      msg_id: "M001",
      receiver_id: "R223",
      msgContent: "Hello, your order with id O345 has been shipped",
      msgTimeStamp: "2024-06-19 14:30:00",
    },
    {
      msg_id: "M002",
      receiver_id: "R224",
      msgContent: "Your order with Id O123 has been canceled. ",
      msgTimeStamp: "2024-07-02 15:45:00",
    },
    {
      msg_id: "M003",
      receiver_id: "R225",
      msgContent: "Your payment has been received. Thank you.",
      msgTimeStamp: "2024-07-05 16:20:00",
    },
  ];
  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Manager Sending Messages Hub"
        sub="Compose and Manage Your Outgoing Communication"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Sent Messages
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Message Id</th>
                <th>Receiver Id</th>
                <th>Message</th>
                <th>Message Timestamp</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {sentMsgInfo.map((message, index) => (
                <ManagerSentMsgList
                  key={index}
                  message={message}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerSentMessage;
