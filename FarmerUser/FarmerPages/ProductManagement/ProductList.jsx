import { FaArrowCircleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const ProductList = ({ product, index }) => {
  const {
    id,
    image,
    productName,
    description,
    category,
    price,
    quantity,
    unit,
    status,
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
        <div className="font-semibold">{productName}</div>
      </td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{status}</td>
      <td><Link to='/dashboard/farmerUpdateProduct'><button onClick={()=>console.log(id)} className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900"> <FaArrowCircleUp className="w-4 h-4 mx-auto font-bold"/>
      </button></Link>
</td>
      <td><button  onClick={()=>console.log(id)} className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900"> <MdDelete className="w-4 h-4 mx-auto font-bold "/>
</button>
</td>
    </tr>
  );
};

export default ProductList;
