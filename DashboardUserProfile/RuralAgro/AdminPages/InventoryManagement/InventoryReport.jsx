import DashboardTitle from "../../../../components/Headers/DashboardTitle";

const InventoryReport = () => {
  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Inventory Report Generation"
        sub=" Comprehensive Reporting and Analysis of Inventory Data"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="container mx-auto my-2 md:my-5 p-2 md:p-6 content shadow-lg">
          <div className="mb-6">
            <h1 className="text-center text-[#409a08] font-semibold text-lg md:text-2xl py-2 md:py-3">
              Generate Inventory Report
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="p-3 md:p-6">
              <form className="mb-4 text-sm md:text-lg">
                <div className="mb-4">
                  <label className="block font-bold mb-1 text-[#5a9a08]">
                    Report Type
                  </label>
                  <select
                    id="report-type"
                    name="report-type"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Stock Report</option>
                    <option>Sales Report</option>
                    <option>Supplier Report</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-1 text-[#5a9a08]">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    name="start-date"
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-1 text-[#5a9a08]">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    name="end-date"
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="my-3 submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out hover:bg-[#4a8206]"
                  >
                    Generate Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryReport;
