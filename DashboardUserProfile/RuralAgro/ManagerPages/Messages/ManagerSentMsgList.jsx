import { MdDelete } from "react-icons/md";

const ManagerSentMsgList = ({ message, index }) => {
  const { msg_id, receiver_id, msgContent, msgTimeStamp } = message;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{msg_id}</div>
      </td>
      <td>{receiver_id}</td>
      <td>{msgContent}</td>
      <td>{msgTimeStamp}</td>
      <td>
        <button className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900">
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default ManagerSentMsgList;
