import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import InventoryList from "./InventoryList";

const ManagerInventoryManagement = () => {
    const inventoryInfo = [
        {
            product_id: 1001,
            inventory_id: 101,
            product_name: "Product A",
            description: "Description for Product A",
            category: "Category 1",
            price: 50,
            quantity: 100,
            unit: "kg",
            update_time: "2024-07-15",
            image: "image_url_1"
        },
        {
            product_id: 1002,
            inventory_id: 102,
            product_name: "Product B",
            description: "Description for Product B",
            category: "Category 2",
            price: 30,
            quantity: 200,
            unit: "kg",
            update_time: "2024-07-14",
            image: "image_url_2"
        },
        {
            product_id: 1003,
            inventory_id: 103,
            product_name: "Product C",
            description: "Description for Product C",
            category: "Category 3",
            price: 70,
            quantity: 150,
            unit: "pcs",
            update_time: "2024-07-13",
            image: "image_url_3"
        },
        {
            product_id: 1004,
            inventory_id: 104,
            product_name: "Product D",
            description: "Description for Product D",
            category: "Category 4",
            price: 40,
            quantity: 250,
            unit: "kg",
            update_time: "2024-07-12",
            image: "image_url_4"
        },
        {
            product_id: 1005,
            inventory_id: 105,
            product_name: "Product E",
            description: "Description for Product E",
            category: "Category 5",
            price: 60,
            quantity: 300,
            unit: "litre",
            update_time: "2024-07-11",
            image: "image_url_5"
        }
    ];
  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Warehouse Inventory Management"
        sub=" Comprehensive Overview of All Inventory Products in the Warehouse"
      ></DashboardTitle>

      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-3 md:py-7">
            Warehouse Inventory List
          </h1>
          <h3 className="text-center text-yellow-500 font-semibold text-sm md:text-base py-1 md:py-3">Warehouse Location: Chittagong</h3>
          <table className="table">
           
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Inventory Id</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price (Tk/Unit)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Last Updated</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {inventoryInfo.map((i, index) => (
                <InventoryList key={index} inventory={i} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerInventoryManagement;
