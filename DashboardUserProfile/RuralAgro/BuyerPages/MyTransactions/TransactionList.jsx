const TransactionList = ({ transaction, index }) => {
  const {
    order_Id,
    transaction_Id,
    paymentAmount,
    paymentMethod,
    paymentStatus,
    paymentTime,
  } = transaction;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{transaction_Id}</div>
      </td>
      <td>{order_Id}</td>
      <td>{paymentAmount}/-</td>
      <td>{paymentMethod}</td>
      <td>{paymentStatus}</td>
      <td>{paymentTime}</td>
    </tr>
  );
};

export default TransactionList;
