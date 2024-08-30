import { useContext, useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import ProductPipelineList from "./ProductPipelineList";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const ProductPipeline = () => {
  const { user } = useContext(AuthContext);
  const [managerDetails, setManagerDetails] = useState([]);
  const [pipelineProductsInfo, setPipelineProductsInfo] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/managers/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setManagerDetails(data);
    };
    fetchData();
  }, [user]);
  useEffect(() => {
    const fetchProductList = async () => {
      const response = await fetch(
        `http://localhost:3000/managerProductListing/${managerDetails.location}`
      );
      const data = await response.json();
      console.log(data);
      setPipelineProductsInfo(data);
    };
    fetchProductList();
  }, [refetchTrigger, managerDetails]);

  const triggerRefetch = () => {
    setRefetchTrigger(!refetchTrigger);
  };

  return (
    <div className="custom-manager-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Product Listing Management"
        sub="Reviewing and Managing Farmer-Submitted Products for Marketplace Display"
      ></DashboardTitle>

      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            {managerDetails.location} Products Pipeline List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price (Tk/Unit)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Farmer Email</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {pipelineProductsInfo.map((p, index) => (
                <ProductPipelineList
                  key={p._id}
                  product={p}
                  index={index}
                  triggerRefetch={triggerRefetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPipeline;
