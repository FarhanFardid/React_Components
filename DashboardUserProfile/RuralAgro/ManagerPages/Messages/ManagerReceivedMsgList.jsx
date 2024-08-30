import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ManagerReceivedMsgList = ({ msg, index }) => {
  const { _id, senderEmail, message, timeStamp, reply } = msg;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{_id}</div>
      </td>
      <td>{senderEmail}</td>
      <td>{message}</td>
      <td>{timeStamp}</td>
      <td>
        {reply ? (
          reply
        ) : (
          <Link to={`/dashboard/managerReplyMessage/${_id}`}>
            <button className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900">
              {" "}
              <FaMessage className="w-3 h-3 mx-auto font-bold" />
            </button>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default ManagerReceivedMsgList;
