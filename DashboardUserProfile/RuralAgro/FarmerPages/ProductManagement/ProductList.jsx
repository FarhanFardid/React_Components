import { FaArrowCircleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ProductList = ({ product, index, triggerRefetch }) => {
  const {
    _id,
    productImage,
    productName,
    productDescription,
    productCategory,
    productPrice,
    productQuantity,
    productUnit,
    status,
  } = product;

  const handleRemoveProduct = (id) => {
    console.log(id);
    Swal.fire({
      title: "Remove The Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/farmerProductDelete/${id}`, {
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
                "Product has been successfully removed.",
                "Success"
              );
              triggerRefetch();
            }
          });
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
            <img src={productImage} alt="Pro_image" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{productName}</div>
      </td>
      <td>{productDescription}</td>
      <td>{productCategory}</td>
      <td>{productPrice}</td>
      <td>{productQuantity}</td>
      <td>{productUnit}</td>
      <td>{status}</td>
      <td>
        <Link to={`/dashboard/farmerUpdateProduct/${_id}`}>
          <button
            onClick={() => console.log(_id)}
            className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-900"
          >
            {" "}
            <FaArrowCircleUp className="w-4 h-4 mx-auto font-bold" />
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleRemoveProduct(_id)}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900"
        >
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default ProductList;
