import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderList = ({ orderInfo, index }) => {
  const {
    _id,
    productName,
    orderPlacedDate,
    estimatedDeliveryDate,
    deliveryStatus,
    productImg,
    productQuantity,
    totalPayment,
    productUnit,
  } = orderInfo;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>

      <td>
        <div className="avatar">
          <div className="mask mask-square rounded-md h-12 w-12">
            <img src={productImg} alt="Pro_image" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{productName}</div>
      </td>
      <td>
        {productQuantity}
        {productUnit}
      </td>
      <td>{totalPayment}/-</td>
      <td>{orderPlacedDate}</td>
      <td>{estimatedDeliveryDate}</td>
      <td>{deliveryStatus}</td>
      <td>
        <Link to={`/dashboard/buyerOrderDetails/${orderInfo._id}`}>
          <button
            onClick={() => console.log(_id)}
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
