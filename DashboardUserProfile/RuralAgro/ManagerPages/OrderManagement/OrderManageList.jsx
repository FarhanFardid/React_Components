import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCircleInfo } from "react-icons/fa6";
import Swal from "sweetalert2";

const OrderManageList = ({ order, index, handleRefetch }) => {
  const {
    deliveryLocation,
    deliveryStatus,
    estimatedDeliveryDate,
    orderPlacedDate,
    buyerId,
    _id,
  } = order;
  const handleDeliveryStatus = (id) => {
    console.log("Delivery status Updates for orderId", id);
    fetch(`http://localhost:3000/orderDeliveryStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Order is Successfully Delivered ",
            icon: "success",
            confirmButtonText: "Cool",
          });
          handleRefetch();
        }
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
      <td>
        <div className="font-semibold">{buyerId}</div>
      </td>
      <td>{orderPlacedDate}</td>
      <td>{deliveryLocation}</td>
      <td>{estimatedDeliveryDate}</td>
      <td>{deliveryStatus}</td>
      <td>
        <Link to={`/dashboard/managerOrderDetails/${order._id}`}>
          <button
            onClick={() => console.log(_id)}
            className="btn-sm btn-circle bg-blue-700 text-white hover:bg-blue-900"
          >
            {" "}
            <FaCircleInfo className="w-5 h-5 mx-auto font-bold" />
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDeliveryStatus(_id)}
          className="btn-sm btn-circle bg-green-600 text-white hover:bg-green-900"
        >
          {" "}
          <TbTruckDelivery className="w-5 h-5 mx-auto font-bold" />
        </button>
      </td>
    </tr>
  );
};

export default OrderManageList;
