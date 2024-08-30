import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import ManagerSentMsgList from "./ManagerSentMsgList";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const ManagerSentMessage = () => {
  const { user } = useContext(AuthContext);
  const [sentMessages, setSentMessages] = useState([]);
  const [triggerRefetch, setTriggerRefetch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/sentMessagesInfo/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setSentMessages(data);
    };
    fetchData();
  }, [user, triggerRefetch]);
  console.log(sentMessages);

  const refetchTrigger = () => {
    setTriggerRefetch(!triggerRefetch);
  };

  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Manager Sending Messages Hub"
        sub="Compose and Manage Your Outgoing Communication"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
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
                <th>Receiver Email</th>
                <th>Sent Message</th>
                <th>Reply Message</th>
                <th>Message Timestamp</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {sentMessages.map((message, index) => (
                <ManagerSentMsgList
                  key={message._id}
                  msg={message}
                  index={index}
                  refetchTrigger={refetchTrigger}
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
