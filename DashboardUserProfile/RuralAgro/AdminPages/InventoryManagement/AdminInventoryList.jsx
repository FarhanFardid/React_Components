import { FaArrowCircleUp } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminInventoryList = ({ index, inventory }) => {
  const {
    product_id,
    inventory_id,
    product_name,
    description,
    category,
    price,
    quantity,
    unit,
    update_time,
    location,
    image,
  } = inventory;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-square rounded-md h-12 w-12">
            <img src={image} alt="Pro_image" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{inventory_id}</div>
      </td>
      <td>
        <div className="font-semibold">{product_id}</div>
      </td>
      <td>
        <div className="font-semibold">{product_name}</div>
      </td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{price}/-</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{location}</td>
      <td>{update_time}</td>
      <td>
        <button
          onClick={() => console.log(inventory_id)}
          className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900"
        >
          {" "}
          <FaArrowCircleUp className="w-4 h-4 mx-auto font-bold" />
        </button>
      </td>
      <td>
        <button
          onClick={() => console.log(inventory_id)}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-800"
        >
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
      <td>
        <Link to="/dashboard/adminInventoryReport">
          <button
            onClick={() => console.log(inventory_id)}
            className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900"
          >
            {" "}
            <FaBookAtlas className="w-4 h-4 mx-auto font-bold" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AdminInventoryList;
