import DashboardTitle from "../../../../components/Headers/DashboardTitle";

const BuyerBankPayment = () => {
  return (
    <div className="custom-buyer-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Bank Transfer Payment Method"
        sub="Direct Bank Transfers for Hassle-Free Payments"
      ></DashboardTitle>
      <div className="details flex flex-col items-center gap-4 text-black mt-8 w-full mx-auto p-3 md:p-5 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-3 md:py-7">
          Bank Transfer Payment Method Coming Soon!!!
        </h1>
      </div>
    </div>
  );
};

export default BuyerBankPayment;
