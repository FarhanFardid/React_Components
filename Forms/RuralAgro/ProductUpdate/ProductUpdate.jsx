// Change content and styling as necessary.
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import "../AddProduct/addproduct.css";

const ProductUpdate = () => {
  return (
    <div className="custom-bg bg-no-repeat bg-center p-8">
      <DashboardTitle
        main="Product Info Update"
        sub="Effortlessly Update and Maintain Your Product Information"
      ></DashboardTitle>

      <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
          Update Product
        </h1>
        <div className="product-form-container">
          <form id="product-form" className="mb-4 text-sm md:text-lg">
            <div className="mb-4">
              <label
                htmlFor="edit-product-name"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Name:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                type="text"
                id="edit-product-name"
                name="edit-product-name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="edit-product-description"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Description:
              </label>
              <textarea
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border resize-y"
                id="edit-product-description"
                name="edit-product-description"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="edit-product-price"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Price:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                type="number"
                id="edit-product-price"
                name="edit-product-price"
                step="0.01"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="edit-product-category"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Category:
              </label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                id="edit-product-category"
                name="edit-product-category"
                required
              >
                <option value="">Select a category</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="grains">Grains</option>
                <option value="dairy">Dairy</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="edit-product-unit"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Unit:
              </label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                id="edit-product-unit"
                name="edit-product-unit"
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
                htmlFor="edit-product-quantity"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Quantity:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                type="number"
                id="edit-product-quantity"
                name="edit-product-quantity"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="edit-product-image"
                className="block font-bold mb-1 text-[#5a9a08]"
              >
                Product Image:
              </label>
              <input
                className="w-full mt-1 border border-gray-300 rounded-lg box-border p-1"
                type="file"
                id="edit-product-image"
                name="edit-product-image"
                accept="image/*"
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
