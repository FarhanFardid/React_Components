import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import ProductList from "./ProductList";
import "../farmer.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const ProductManagement = () => {
  const { user } = useContext(AuthContext);
  const [productsInfo, setProductsInfo] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  useEffect(() => {
    const fetchProductsData = async () => {
      const response = await fetch(
        `http://localhost:3000/farmerProducts/${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setProductsInfo(data);
    };
    fetchProductsData();
  }, [user, refetchTrigger]);
  console.log(productsInfo);

  const triggerRefetch = () => {
    setRefetchTrigger(!refetchTrigger);
  };
  return (
    <div className="custom-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Product Management"
        sub="Efficiently Manage and Track Your Farm's Produce with Ease"
      />
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Products List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price (Tk)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {productsInfo.map((p, index) => (
                <ProductList
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

export default ProductManagement;
