import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import ProductPipelineList from "./ProductPipelineList";

const ProductPipeline = () => {
  const listedProducts = [
    {
      product_id: "P001",
      farmer_id: "F123",
      product_name: "Organic Apples",
      description: "Fresh organic apples grown without pesticides.",
      category: "Fruits",
      price: 150,
      quantity: 100,
      unit: "kg",
      created_time: "2024-07-13 10:00:00",
      image: "https://example.com/images/apple.jpg",
    },
    {
      product_id: "P002",
      farmer_id: "F124",
      product_name: "Free-Range Eggs",
      description:
        "Eggs from free-range chickens, rich in flavor and nutrients.",
      category: "Dairy",
      price: 120,
      quantity: 200,
      unit: "dozen",
      created_time: "2024-07-12 10:30:00",
      image: "https://example.com/images/eggs.jpg",
    },
    {
      product_id: "P003",
      farmer_id: "F125",
      product_name: "Whole Wheat Bread",
      description:
        "Freshly baked whole wheat bread, perfect for a healthy diet.",
      category: "Bakery",
      price: 5.0,
      quantity: 50,
      unit: "Piece",
      created_time: "2024-07-11 11:30:00",
      image: "https://example.com/images/bread.jpg",
    },
    {
      product_id: "P004",
      farmer_id: "F126",
      product_name: "Onion",
      description: "Organic farm Fresh Onions.",
      category: "Vegetables",
      price: 40,
      quantity: 150,
      unit: "Kg",
      created_time: "2024-07-10 09:30:00",
      image: "https://example.com/images/onion.jpg",
    },
    {
      product_id: "P005",
      farmer_id: "F127",
      product_name: "Fresh Carrots",
      description: "Crisp and sweet organic carrots.",
      category: "Vegetables",
      price: 25,
      quantity: 150,
      unit: "kg",
      created_time: "2024-07-14 12:00:00",
      image: "https://example.com/images/carrot.jpg",
    },
    {
      product_id: "P006",
      farmer_id: "F128",
      product_name: "Goat Cheese",
      description: "Creamy goat cheese with a tangy flavor.",
      category: "Dairy",
      price: 600,
      quantity: 15,
      unit: "Kg",
      created_time: "2024-07-13 12:30:00",
      image: "https://example.com/images/cheese.jpg",
    },
  ];
  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Product Listing Management"
        sub="Reviewing and Managing Farmer-Submitted Products for Marketplace Display"
      ></DashboardTitle>

      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Products Pipeline List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Id</th>
                <th>Farmer Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price (Tk/Unit)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Created Time</th>
                <th>Approve</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {listedProducts.map((p, index) => (
                <ProductPipelineList key={index} product={p} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPipeline;
