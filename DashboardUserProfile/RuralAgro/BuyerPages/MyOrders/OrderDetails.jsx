import { useParams } from "react-router-dom";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";

const OrderDetails = () => {
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
  const { order_Id } = useParams();
  // const order_ID = Number(order_Id);
  console.log(order_Id);
  const detailsOrder = ordersInfo.find((i) => i.orderId === order_Id);
  console.log(detailsOrder);
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Order Details"
        sub="Your Order at a Glance"
      ></DashboardTitle>

      <div className="w-[80%] md:w-[60%] mx-auto my-3 md:my-20 p-6 md:p-20 bg-black bg-opacity-70 text-white shadow-lg rounded-md text-center">
        <div className="flex justify-center w-full">
          <div className="w-full">
            <div className="details bg-white bg-opacity-60 text-black p-3 md:p-6 rounded-md">
              <h2 className="text-base md:text-xl font-bold py-2 md:py-3">
                Order_ID: {detailsOrder.orderId}
              </h2>

              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Number Of Products: </strong>{" "}
                <span> {detailsOrder.numOfProducts}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Quantity:</strong>{" "}
                <span>
                  {detailsOrder.quantity} {detailsOrder.units}
                </span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Total Price:</strong>{" "}
                <span>{detailsOrder.totalPrice} /-</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Order Status:</strong>{" "}
                <span>{detailsOrder.orderStatus}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Order Placed On:</strong>{" "}
                <span>{detailsOrder.orderPlacedOn}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Possible delivery date:</strong>{" "}
                <span>{detailsOrder.deliveryDate}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Delivery Status:</strong>{" "}
                <span>{detailsOrder.deliveryStatus}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
