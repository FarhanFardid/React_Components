import { useLoaderData } from "react-router-dom";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
const ManagerOrderDetails = () => {
  const orderInfo = useLoaderData();
  console.log(orderInfo);
  const {
    PaymentMethod,
    cartListId,
    deliveryLocation,
    deliveryStatus,
    estimatedDeliveryDate,
    orderPlacedDate,
    buyerId,
    buyerEmail,
    buyerContact,
    productId,
    productImg,
    productName,
    productQuantity,
    productUnit,
    totalPayment,
    warehouseLocation,
    _id,
  } = orderInfo;
  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Order Detail Information"
        sub="Order info at a Glance"
      ></DashboardTitle>

      <div className="w-[80%] md:w-[60%] mx-auto my-3 md:my-20 p-6 md:p-20 bg-black bg-opacity-70 text-white shadow-lg rounded-md text-center">
        <div className="flex justify-center w-full">
          <div className="w-full">
            <div className="details bg-white bg-opacity-60 text-black p-3 md:p-6 rounded-md">
              <div>
                <img
                  className="w-28 h-28 md:w-48 md:h-48 rounded-full mx-auto mb-4 md:mb-8 bg-black"
                  src={productImg}
                  alt="Product Image"
                />
              </div>
              <h2 className="text-base md:text-xl font-bold py-2 md:py-3">
                Order Id: {_id}
              </h2>
              <p className="font-medium pb-2 text-xs md:text-lg">
                <strong>Product Name: </strong> <span> {productName}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Product Quantity:</strong>{" "}
                <span>
                  {productQuantity} {productUnit}
                </span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Total Price:</strong> <span>{totalPayment}/-</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Buyer Id: </strong> <span> {buyerId}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Buyer Email: </strong> <span> {buyerEmail}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Buyer Contact: </strong> <span> {buyerContact}</span>
              </p>

              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Warehouse: </strong> <span> {warehouseLocation}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Payment Method:</strong> <span>{PaymentMethod}</span>
              </p>

              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>ProductId: </strong> <span> {productId}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>CartListId: </strong> <span> {cartListId}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Order Placed On:</strong> <span>{orderPlacedDate}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Estimated delivery date:</strong>{" "}
                <span>{estimatedDeliveryDate}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Delivery Location:</strong>{" "}
                <span>{deliveryLocation}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Delivery Status:</strong> <span>{deliveryStatus}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerOrderDetails;
