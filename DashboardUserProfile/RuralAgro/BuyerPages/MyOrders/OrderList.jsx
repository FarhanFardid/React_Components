import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderList = ({ order, index }) => {
  const {
    orderId,
    orderStatus,
    orderPlacedOn,
    deliveryDate,
    deliveryStatus,
  } = order;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{orderId}</div>
      </td>
      <td>{orderStatus}</td>
      <td>{orderPlacedOn}</td>
      <td>{deliveryDate}</td>
      <td>{deliveryStatus}</td>
      <td>
        <Link to={`/dashboard/buyerOrderDetails/${orderId}`}>
          <button
            onClick={() => console.log(orderId)}
            className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900"
          >
            {" "}
            <FaArrowCircleRight className="w-4 h-4 mx-auto font-bold" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default OrderList;
