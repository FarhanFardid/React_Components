import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProductPipelineList = ({ product, index, triggerRefetch }) => {
  const {
    _id,
    productName,
    productDescription,
    productCategory,
    productPrice,
    productQuantity,
    productUnit,
    status,
    farmerEmail,
    productImage,
  } = product;

  const handleStatus = (id) => {
    console.log("Product to Update", id);
    fetch(`http://localhost:3000/managerProductStatusUpdate/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product Status Updated to Approved");
          triggerRefetch();
        } else {
          toast.error("Product Status Updates Failed");
        }
      });
  };
  const handleDeleteProduct = (id) => {
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
        <div className="font-semibold">{_id}</div>
      </td>
      <td>
        <div className="font-semibold">{productName}</div>
      </td>
      <td className="mx-auto">
        <div>{productDescription}</div>
      </td>
      <td>{productCategory}</td>
      <td>{productPrice}/-</td>
      <td>{productQuantity}</td>
      <td>{productUnit}</td>
      <td>{farmerEmail}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => {
            handleStatus(_id);
          }}
          className="btn-xs btn-circle bg-green-600 text-white hover:bg-green-800"
        >
          {" "}
          <FaCheckCircle className="w-4 h-4 mx-auto font-bold" />
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            handleDeleteProduct(_id);
          }}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-800"
        >
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default ProductPipelineList;
