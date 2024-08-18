import { useLoaderData } from "react-router-dom";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import "../farmer.css";
import { toast } from "react-toastify";

const ProductUpdate = () => {
  const loadedProductInfo = useLoaderData();
  console.log(loadedProductInfo[0]);
  const {
    _id,
    productName,
    productDescription,
    productQuantity,
    productCategory,
    productUnit,
    productImage,
    productPrice,
  } = loadedProductInfo[0];
  // Product Updated Info Form Handle
  const handleProductUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
    const updatedInfo = { ...values, status: "Pending" };
    console.log(updatedInfo);
    fetch(`http://localhost:3000/farmerProduct/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product Info Successfully Updated");
        } else {
          toast.error("Product Info Update Failed");
        }
      });
  };
  return (
    <div className="custom-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Product Info Update"
        sub="Effortlessly Update and Maintain Your Product Information"
      ></DashboardTitle>

      <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
          Update Product
        </h1>
        <div className="product-form-container">
          <form
            onSubmit={handleProductUpdate}
            id="product-form"
            className="mb-4 text-sm md:text-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Name:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                type="text"
                id="productName"
                name="productName"
                required
                defaultValue={productName}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productDescription"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Description:
              </label>
              <textarea
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border resize-y"
                id="productDescription"
                name="productDescription"
                required
                defaultValue={productDescription}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="productPrice"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Price:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                type="number"
                id="productPrice"
                name="productPrice"
                step="0.5"
                min={0}
                required
                defaultValue={productPrice}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productCategory"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Category:
              </label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                id="productCategory"
                name="productCategory"
                defaultValue={productCategory}
                required
              >
                <option value="">Select a category</option>
                <option value="grains">Grains</option>
                <option value="dairy">Dairy</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="productUnit"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Unit:
              </label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                id="productUnit"
                name="productUnit"
                defaultValue={productUnit}
                required
              >
                <option value="">Select a unit</option>
                <option value="kg">kg</option>
                <option value="gram">gram</option>
                <option value="mg">mg</option>
                <option value="liter">liter</option>
                <option value="ml">ml</option>
                <option value="pieces">pieces</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="productQuantity"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Quantity:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                type="number"
                id="productQuantity"
                name="productQuantity"
                step="1"
                min={1}
                required
                defaultValue={productQuantity}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productImage"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Image:
              </label>
              <input
                className="w-full mt-1 border border-gray-300 rounded-lg box-border p-1"
                type="url"
                id="productImage"
                name="productImage"
                defaultValue={productImage}
              />
            </div>
            <button
              type="submit"
              className="submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out hover:bg-[#4a8206]"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
