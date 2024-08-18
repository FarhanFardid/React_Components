// import { FaArrowCircleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UsersList = ({ user, index, triggerRefetch }) => {
  const { _id, name, email, photo, regDate, role, mobileNumber, location } =
    user;
  const handleUserRemove = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Remove From Users?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "User has been successfully deleted.",
                "Success"
              );
              triggerRefetch();
            }
          });
        if (role === "Farmer") {
          fetch(`http://localhost:3000/farmerDelete/${email}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                toast.success("Farmer Profile Successfully Deleted");
              } else {
                toast.error("Farmer Profile Delete Failed");
              }
            });
        }
        if (role === "Buyer") {
          fetch(`http://localhost:3000/buyerDelete/${email}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                toast.success("Buyer Profile Successfully Deleted");
              } else {
                toast.error("Buyer Profile Delete Failed");
              }
            });
        }
        if (role === "Manager") {
          fetch(`http://localhost:3000/managerDelete/${email}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                toast.success("Manager Profile Successfully Deleted");
              } else {
                toast.error("Manager Profile Delete Failed");
              }
            });
        }
      }
    });
  };
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-square rounded-md h-12 w-12">
            <img src={photo} alt="User image" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{_id}</div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{mobileNumber}</td>
      <td>{location}</td>
      <td>{regDate}</td>
      <td>{role}</td>
      {/* <td><button onClick={()=>console.log(_id)} className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900"> <FaArrowCircleUp className="w-4 h-4 mx-auto font-bold"/>
          </button>
    </td> */}
      <td>
        <button
          onClick={() => handleUserRemove(_id)}
          disabled={role === "Admin"}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900 disabled:cursor-not-allowed"
        >
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default UsersList;
