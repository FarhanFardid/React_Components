import { useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import AdminInventoryList from "./AdminInventoryList";

const AdminInventoryManagement = () => {
  const [inventoryInfo, setInventoryInfo] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  // Inventory data Loading from server
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3000/products";
      try {
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setInventoryInfo(data);
      } catch (error) {
        console.log("Error occurred", error);
      }
    };
    fetchData();
  }, [refetchTrigger]);
  console.log(inventoryInfo);
  const triggerRefetch = () => {
    setRefetchTrigger(!refetchTrigger);
  };
  return (
    <div className="custom-admin-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Admin Inventory Management"
        sub=" Efficiently Oversee and Control Inventory Assets in all Warehouse"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-3 md:py-7">
            All Warehouse Inventory List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price (Tk/Unit)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Warehouse Location</th>
                <th>Delete</th>
                {/* <th>Generate Report</th> */}
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {inventoryInfo.map((inventory, index) => (
                <AdminInventoryList
                  key={inventory._id}
                  inventory={inventory}
                  index={index}
                  triggerRefetch={triggerRefetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminInventoryManagement;
