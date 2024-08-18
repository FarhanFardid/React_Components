import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import OrderList from "./OrderList";
const BuyerOrders = () => {
  const ordersInfo = [
    {
      orderId: 'O2407011030',
      numOfProducts: 3,
      quantity: 23,
      units: "Kg",
      totalPrice: 2500,
      orderStatus: "Processed",
      orderPlacedOn: "2024-07-01 10:30:25",
      deliveryDate: "2024-07-05",
      deliveryStatus: "Delivered",
    },
    {
      orderId: 'O2407021245',
      numOfProducts: 4,
      quantity: 20,
      units: "kg",
      totalPrice: 1800,
      orderStatus: "Shipped",
      orderPlacedOn: "2024-07-02 12:45:00",
      deliveryDate: "2024-07-10",
      deliveryStatus: "In Transit",
    },
    {
      orderId: 'O2407031500',
      numOfProducts: 5,
      quantity: 15,
      units: "kg",
      totalPrice: 900,
      orderStatus: "Pending",
      orderPlacedOn: "2024-07-03 15:00:00",
      deliveryDate: "2024-07-15",
      deliveryStatus: "Pending",
    },
    {
      orderId: 'O2407051530',
      numOfProducts: 3,
      quantity: 10,
      units: "kg",
      totalPrice: 600,
      orderStatus: "pending",
      orderPlacedOn: "2024-07-05 15:30:00",
      deliveryDate: "2024-07-17",
      deliveryStatus: "Pending",
    },
  ];
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
                <th>Order Id</th>
                <th>Order Status</th>
                <th>Order Placed On </th>
                <th>Delivery Date</th>
                <th>Delivery Status</th>
                <th>View Order Details</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {ordersInfo.map((order, index) => (
                <OrderList key={index} order={order} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuyerOrders;
