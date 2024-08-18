import { MdDelete } from "react-icons/md";
const InventoryList = ({ inventory, index }) => {
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
      <td>{update_time}</td>
      <td>
        <button
          onClick={() => console.log(product_id)}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-800"
        >
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default InventoryList;
