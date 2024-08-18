import { FaArrowCircleUp, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ProductPipelineList = ({ product, index }) => {
  const {
    product_id,
    farmer_id,
    product_name,
    description,
    category,
    price,
    quantity,
    unit,
    created_time,
    image,
  } = product;
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
        <div className="font-semibold">{product_id}</div>
      </td>
      <td>
        <div className="font-semibold">{farmer_id}</div>
      </td>
      <td>
        <div className="font-semibold">{product_name}</div>
      </td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{price}/-</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{created_time}</td>
      <td>
        <button
          onClick={() => console.log(product_id)}
          className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-800"
        >
          {" "}
          <FaCheckCircle className="w-4 h-4 mx-auto font-bold" />
        </button>
      </td>
      <td>
        <button
          onClick={() => console.log(product_id)}
          className="btn-xs btn-circle bg-yellow-700 text-white hover:bg-yellow-800"
        >
          {" "}
          <FaArrowCircleUp className="w-4 h-4 mx-auto font-bold" />
        </button>
      </td>
      <td>
        <button
          onClick={() => console.log(product_id)}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-800"
        >
          {" "}
          <FaTimesCircle className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default ProductPipelineList;
