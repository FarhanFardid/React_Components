// Change and Updates as necessary.
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import TransactionList from "./TransactionList";

const MyTransactions = () => {
  const transactionsInfo = [
    {
      order_Id: "O78901",
      transaction_Id: "T123456",
      paymentAmount: "2000",
      paymentMethod: "Credit Card",
      paymentStatus: "Completed",
      paymentTime: "2024-06-15 14:30:00",
    },
    {
      order_Id: "O78902",
      transaction_Id: "T123457",
      paymentAmount: "1500",
      paymentMethod: "Bkash",
      paymentStatus: "Completed",
      paymentTime: "2024-06-26 12:45:00",
    },
    {
      order_Id: "O78903",
      transaction_Id: "T123458",
      paymentAmount: "1000",
      paymentMethod: "Nogod",
      paymentStatus: "Failed",
      paymentTime: "2024-07-02 16:20:00",
    },
    {
      order_Id: "O78904",
      transaction_Id: "T123459",
      paymentAmount: "20000",
      paymentMethod: "Bank Transfer",
      paymentStatus: "Completed",
      paymentTime: "2024-07-05 17:10:00",
    },
  ];
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="My Transactions"
        sub="Review Your Recent Transactions"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Transactions Summary
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Transaction Id</th>
                <th>Order Id</th>
                <th>Amount Paid</th>
                <th>Payment Method </th>
                <th>Payment Status</th>
                <th>Payment TimeStamp</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {transactionsInfo.map((transaction, index) => (
                <TransactionList
                  key={index}
                  transaction={transaction}
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

export default MyTransactions;
