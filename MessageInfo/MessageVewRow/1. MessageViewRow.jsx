// Change the content and styling as necessary.
import { FaMessage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MessageList = ({ message, index }) => {
  const { msg_id, sender_id, msgContent, msgTimeStamp } = message;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{msg_id}</div>
      </td>
      <td>{sender_id}</td>
      <td>{msgContent}</td>
      <td>{msgTimeStamp}</td>
      <td>
        <Link to={`/dashboard/buyerComposeMessages`}>
          <button className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900">
            {" "}
            <FaMessage className="w-3 h-3 mx-auto font-bold" />
          </button>
        </Link>
      </td>
      <td>
        <button className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900">
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default MessageList;
