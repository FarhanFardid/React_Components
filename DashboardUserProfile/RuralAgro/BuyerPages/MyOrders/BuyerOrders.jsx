import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import OrderList from "./OrderList";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
const BuyerOrders = () => {
  const { user } = useContext(AuthContext);
  const [ordersInfo, setOrdersInfo] = useState([]);
  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await fetch(
        `http://localhost:3000/orders/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setOrdersInfo(data);
    };
    fetchOrdersData();
  }, [user]);
  console.log(ordersInfo);

  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="My Orders"
        sub="Order Summary and Tracking"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Orders Summary
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Quantity </th>
                <th>Total Cost </th>
                <th>Order Placed On </th>
                <th>Delivery Date</th>
                <th>Delivery Status</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {ordersInfo.map((orderInfo, index) => (
                <OrderList
                  key={orderInfo._id}
                  orderInfo={orderInfo}
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

export default BuyerOrders;
