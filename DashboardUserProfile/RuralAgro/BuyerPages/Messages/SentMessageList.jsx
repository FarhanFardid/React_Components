import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const SentMessageList = ({ msg, index, refetchTrigger }) => {
  const { _id, receiverEmail, message, timeStamp, reply } = msg;
  const handleMsgDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/messages/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Message has been Removed.", "success");
        }
        refetchTrigger();
      });
  };
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{_id}</div>
      </td>
      <td>{receiverEmail}</td>
      <td>{message}</td>
      <td>{reply ? reply : "Not replied yet "}</td>
      <td>{timeStamp}</td>
      <td>
        <button
          onClick={() => handleMsgDelete(_id)}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900"
        >
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default SentMessageList;
