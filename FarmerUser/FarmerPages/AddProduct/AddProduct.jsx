import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import '../farmer.css'

const AddProduct = () => {
  return (
    <div className="custom-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Add Product"
        sub="Showcase Your Harvest: Add Your Farm Products Here"
      ></DashboardTitle>

      <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
          Add New Product
        </h1>
        <form
          action="/add-product"
          method="POST"
          className="mb-4 text-sm md:text-lg"
        >
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="product-name"
            >
              Product Name:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="product-name"
              name="product-name"
              placeholder="Enter your product name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="product-description"
            >
              Product Description:
            </label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border resize-y"
              id="product-description"
              name="product-description"
                     placeholder="Enter product description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="product-price"
            >
              Product Price:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="number"
              id="product-price"
              name="product-price"
              step="0.01"
                     placeholder="Enter product price"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="product-category"
            >
              Product Category:
            </label>
            <select
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              id="product-category"
              name="product-category"
               placeholder="Enter product category"
              required
            >
              <option value="">Select a category</option>
              <option value="fruits">Fruit</option>
              <option value="vegetables">Vegetable</option>
              <option value="grains">Grain</option>
              <option value="dairy">Dairy</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="product-unit"
            >
              Unit:
            </label>
            <select
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              id="product-unit"
              name="product-unit"
               placeholder="Enter product unit"
              required
            >
              <option value="">Select a unit</option>
              <option value="kg">kg</option>
              <option value="gram">gram</option>
              <option value="ml">ml</option>
              <option value="pieces">pieces</option>
              <option value="mg">mg</option>
              <option value="liter">liter</option>
              <option value="ounce">ounce</option>
              <option value="pound">pound</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="product-quantity"
            >
              Quantity:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="number"
              id="product-quantity"
              name="product-quantity"
               placeholder="Enter product quantity"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="product-image"
            >
              Product Image:
            </label>
            <input
              className="w-full mt-1 border border-gray-300 rounded-lg box-border p-1"
              type="file"
              id="product-image"
              name="product-image"
              accept="image/*"
               placeholder="Enter product image"
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out hover:bg-[#4a8206]"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
