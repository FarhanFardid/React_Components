import { MdDelete, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const CartList = ({
  item,
  index,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleDelete,
}) => {
  return (
    <tr key={index}>
      <th className="text-center">
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="avatar flex justify-center">
          <div className="mask mask-square rounded-md h-12 w-12">
            <img src={item.productImage || "default-image.png"} alt="pro_img" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold text-center">{item.productName}</div>
      </td>
      <td>
        <div className="font-semibold text-center">{item.productPrice} /-</div>
      </td>
      <td>
        <div className="font-semibold text-center flex md:flex-row flex-col justify-center items-center">
          <button
            className="bg-red-700  w-3 md:w-5 text-center rounded-btn text-white text-xs md:text-sm"
            onClick={() => handleDecrementQuantity(index)}
          >
            -
          </button>
          <span className="py-1 mx-2">{item.quantity}</span>
          <button
            className="bg-green-700 w-3 md:w-5 text-center rounded-btn text-white text-xs md:text-sm"
            onClick={() => handleIncrementQuantity(index)}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <div className="font-semibold text-center">{item.productUnit}</div>
      </td>
      <td className="font-bold text-center">
        <Link to={`/dashboard/buyerCheckout/${item._id}`}>
          <button
            // onClick={() => console.log(item._id)}
            className="btn btn-circle btn-sm rounded-full bg-green-700 text-white hover:bg-green-800 "
          >
            <MdShoppingCart />
          </button>
        </Link>
      </td>
      <td>
        <div className="flex justify-center">
          <button
            className=" btn btn-circle btn-sm bg-red-700 rounded-full hover:bg-red-800 p-1"
            onClick={() => handleDelete(item)}
          >
            <MdDelete className="text-white w-4 h-4 md:w-5 md:h-5 " />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartList;
