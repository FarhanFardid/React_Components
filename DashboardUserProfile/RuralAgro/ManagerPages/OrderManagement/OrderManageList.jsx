

const OrderManageList = ({order,index}) => {
    const {
        order_Id,
        buyer_Id,
        orderStatus,
        orderPlaced,
        deliveryAddress,
        deliveryDate,
        deliveryStatus,
      } = order;
    return (
        <tr>
        <th>
          <label>{index + 1}.</label>
        </th>
        <td>
          <div className="font-semibold">{order_Id}</div>
        </td>
        <td>
          <div className="font-semibold">{buyer_Id}</div>
        </td>
        <td>{orderStatus}</td>
        <td>{orderPlaced}</td>
        <td>{deliveryAddress}</td>
        <td>{deliveryDate}</td>
        <td>{deliveryStatus}</td>

      </tr>
    );
};

export default OrderManageList;