import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import ProductList from "./ProductList";
import '../farmer.css'

const ProductManagement = () => {
  const agriculturalProducts = [
    {
      id: 1,
      image: "https://example.com/images/apple.jpg",
      productName: "Apple",
      description: "Fresh red apples",
      category: "Fruit",
      price: 100,
      quantity: 10,
      unit: "kg",
      status: "Approved",
    },
    {
      id: 2,
      image: "https://example.com/images/carrot.jpg",
      productName: "Carrot",
      description: "Organic carrots",
      category: "Vegetable",
      price: 25,
      quantity: 20,
      unit: "kg",
      status: "Approved",
    },
    {
      id: 3,
      image: "https://example.com/images/wheat.jpg",
      productName: "Wheat",
      description: "High-quality wheat",
      category: "Grain",
      price: 80,
      quantity: 50,
      unit: "kg",
      status: "Pending",
    },
    {
      id: 4,
      image: "https://example.com/images/milk.jpg",
      productName: "Milk",
      description: "Fresh cow milk",
      category: "Dairy",
      price: 75,
      quantity: 30,
      unit: "Liter",
      status: "Pending",
    },
    {
      id: 5,
      image: "https://example.com/images/potato.jpg",
      productName: "Potato",
      description: "Farm fresh potatoes",
      category: "Vegetable",
      price: 20,
      quantity: 40,
      unit: "kg",
      status: "Pending",
    },
    {
      id: 6,
      image: "https://example.com/images/strawberry.jpg",
      productName: "Strawberry",
      description: "Sweet strawberries",
      category: "Fruit",
      price: 300,
      quantity: 15,
      unit: "kg",
      status: "Denied",
    },
    {
      id: 7,
      image: "https://example.com/images/rice.jpg",
      productName: "Rice",
      description: "Premium white rice",
      category: "Grain",
      price: 60,
      quantity: 60,
      unit: "kg",
      status: "Denied",
    },
  ];

  return (
    <div className="custom-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Product Management"
        sub="Efficiently Manage and Track Your Farm's Produce with Ease"
      />
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Products List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price (Tk)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {agriculturalProducts.map((p, index) => (
                <ProductList
                  key={index}
                  product={p}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
