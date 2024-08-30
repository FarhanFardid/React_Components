import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import "../farmer.css";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [farmerDetails, setFarmerDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/farmers/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setFarmerDetails(data);
    };
    fetchData();
  }, [user]);
  const handleAddProduct = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    const farmerEmail = user?.email;
    const farmerLocation = farmerDetails.farmLocation;
    const productInfo = {
      ...values,
      farmerEmail,
      farmerLocation,
      status: "Pending",
    };
    console.log(productInfo);
    fetch("http://localhost:3000/farmerProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Products Successfully Added to DB");
          event.target.reset();
        } else {
          toast.error("Product Addition to DB Failed ");
        }
      });
  };
  return (
    <div className="custom-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Add Product"
        sub="Showcase Your Harvest: Add Your Farm Products Here"
      ></DashboardTitle>

      <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-60 rounded-lg shadow-lg">
        <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
          Add New Product
        </h1>
        <form onSubmit={handleAddProduct} className="mb-4 text-sm md:text-lg">
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="productName"
            >
              Product Name:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter your product name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="productDescription"
            >
              Product Description:
            </label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border resize-y"
              id="productDescription"
              name="productDescription"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="productPrice"
            >
              Product Unit Price (Tk) :
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="number"
              id="productPrice"
              name="productPrice"
              step="0.5"
              min={0}
              placeholder="Enter product price"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="productCategory"
            >
              Product Category:
            </label>
            <select
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              id="productCategory"
              name="productCategory"
              placeholder="Enter product category"
              required
            >
              <option value="">Select a category</option>
              <option value="grains">Grain</option>
              <option value="dairy">Dairy</option>
              <option value="vegetables">Vegetable</option>
              <option value="fruits">Fruit</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="productQuantity"
            >
              Quantity:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="number"
              id="productQuantity"
              name="productQuantity"
              placeholder="Enter product quantity"
              step="1"
              min={1}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="productUnit"
            >
              Unit:
            </label>
            <select
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              id="productUnit"
              name="productUnit"
              placeholder="Enter product unit"
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
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="productImage"
            >
              Product Photo URL:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="url"
              id="productImage"
              name="productImage"
              placeholder="Enter product image url"
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out mt-3 hover:bg-[#4a8206]"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
