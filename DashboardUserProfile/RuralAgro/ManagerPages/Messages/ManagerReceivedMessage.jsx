import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import ManagerReceivedMsgList from "./ManagerReceivedMsgList";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const ManagerReceivedMessage = () => {
  const { user } = useContext(AuthContext);
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/receivedMessagesInfo/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setReceivedMessages(data);
    };
    fetchData();
  }, [user]);
  console.log(receivedMessages);

  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Manager Received Messages Hub"
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
                <th>Sender Email</th>
                <th>Message</th>
                <th>Message Timestamp</th>
                <th>Reply</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {receivedMessages.map((message, index) => (
                <ManagerReceivedMsgList
                  key={message._id}
                  msg={message}
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

export default ManagerReceivedMessage;
