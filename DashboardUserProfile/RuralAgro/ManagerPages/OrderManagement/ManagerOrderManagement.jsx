import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import OrderManageList from "./OrderManageList";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
const ManagerOrderManagement = () => {
  const { user } = useContext(AuthContext);
  const [managerDetails, setManagerDetails] = useState([]);
  const [ordersInfo, setOrdersInfo] = useState([]);
  const [triggerRefetch, setTriggerRefetch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/managers/${user?.email}`
      );
      const data = await response.json();
      // console.log(data);
      setManagerDetails(data);
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await fetch(
        `http://localhost:3000/managerOrderView/${managerDetails.location}`
      );
      const data = await response.json();
      console.log(data);
      setOrdersInfo(data);
    };
    fetchOrderData();
  }, [managerDetails, triggerRefetch]);
  console.log(ordersInfo);
  const handleRefetch = () => {
    setTriggerRefetch(!triggerRefetch);
  };

  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Order Management"
        sub="Streamline and Oversee Buyer Orders with Ease"
      ></DashboardTitle>

      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-3 md:py-7">
            {managerDetails.location} Warehouse Orders Summary List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Order Id</th>
                <th>Buyer Id</th>
                <th>Order Placed On </th>
                <th>Delivery Address</th>
                <th>Estimated Delivery Date</th>
                <th>Delivery Status</th>
                <th>View Details Info</th>
                <th>Update Delivery Status</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {ordersInfo.map((order, index) => (
                <OrderManageList
                  key={order._id}
                  order={order}
                  index={index}
                  handleRefetch={handleRefetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerOrderManagement;
