import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import InventoryList from "./InventoryList";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const ManagerInventoryManagement = () => {
  const { user } = useContext(AuthContext);
  const [managerDetails, setManagerDetails] = useState([]);
  const [inventoryProductsInfo, setInventoryProductsInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/managers/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setManagerDetails(data);
    };
    fetchData();
  }, [user]);
  useEffect(() => {
    const fetchProductList = async () => {
      const response = await fetch(
        `http://localhost:3000/managerInventoryProducts/${managerDetails.location}`
      );
      const data = await response.json();
      console.log(data);
      setInventoryProductsInfo(data);
    };
    fetchProductList();
  }, [managerDetails]);
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
          <h3 className="text-center text-yellow-500 font-semibold text-sm md:text-base py-1 md:py-3">
            Warehouse Location: {managerDetails.location}
          </h3>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Inventory Product Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price (Tk/Unit)</th>
                <th>Quantity</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {inventoryProductsInfo.map((i, index) => (
                <InventoryList key={i._id} inventory={i} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerInventoryManagement;
