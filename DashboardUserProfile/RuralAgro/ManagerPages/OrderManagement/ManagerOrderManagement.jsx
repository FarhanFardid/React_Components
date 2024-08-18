import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import OrderManageList from "./OrderManageList";
const ManagerOrderManagement = () => {
  const ordersInfo = [    {
    order_Id: 'O2407051530',
    buyer_Id: 1001,
    orderStatus: "Confirmed",
    orderPlaced: "2024-07-05 15:30:00",
    deliveryAddress: "123 Main St, Dhaka",
    deliveryDate: "2024-07-15",
    deliveryStatus: "Delivered"
},
{
    order_Id: 'O2407061145',
    buyer_Id: 1002,
    orderStatus: "Confirmed",
    orderPlaced: "2024-07-06 11:45:00",
    deliveryAddress: "456 Green St, Dhaka",
    deliveryDate: "2024-07-18",
    deliveryStatus: "In Transit"
},
{
    order_Id: 'O2407070930',
    buyer_Id: 1003,
    orderStatus: "Confirmed",
    orderPlaced: "2024-07-08 09:30:00",
    deliveryAddress: "Chawkbazar, Chittagong",
    deliveryDate: "2024-07-19",
    deliveryStatus: "In-Transit"
},
{
    order_Id: 'O2407081040',
    buyer_Id: 1004,
    orderStatus: "Confirmed",
    orderPlaced: "2024-07-08 10:40:00",
    deliveryAddress: "321 St,sholosohor Chittagong",
    deliveryDate: "2024-07-15",
    deliveryStatus: "Delayed"
},
{
    order_Id: 'O2407091230',
    buyer_Id: 1005,
    orderStatus: "Processing",
    orderPlaced: "2024-07-09 12:30:00",
    deliveryAddress: "654 Metropolis, Dhaka",
    deliveryDate: "2024-07-21",
    deliveryStatus: "Processing"
}];
  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Order Review Portal"
        sub="Streamline and Oversee Buyer Orders with Ease"
      ></DashboardTitle>

      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-3 md:py-7">
            Orders Summary List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Order Id</th>
                <th>Buyer Id</th>
                <th>Order Status</th>
                <th>Order Placed On </th>
                <th>Delivery Address</th>
                <th>Delivery Date</th>
                <th>Delivery Status</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {ordersInfo.map((o, index) => (
                <OrderManageList key={index} order={o} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerOrderManagement;
