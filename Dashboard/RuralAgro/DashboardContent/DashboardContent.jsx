import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../Shared/DashboardNav";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";
import logo from "../assets/images/logo/logo-01.png";
import {
  FaUserFriends,
  FaHome,
  FaSwatchbook,
  FaBookReader,
  FaUserEdit,
  FaShoppingCart,
  FaClipboardList,
  FaEdit,
  FaUser,
} from "react-icons/fa";
import {
  MdOutlineInventory,
  MdOutlineQueryStats,
  MdOutlineContentPaste,
  MdSyncProblem,
  MdOutlineSettings,
  MdInventory,
  MdInfo,
  MdCall,
  MdPayments,
  MdChat,
  MdHomeWork,
  MdBook,
  MdOutlineAddCircle,
  // MdManageHistory,
} from "react-icons/md";
import { GrProductHunt } from "react-icons/gr";
import { useState } from "react";
import { TiMessage, TiMessages, TiMessageTyping } from "react-icons/ti";
import useBuyer from "../Hooks/useBuyer";
import useManager from "../Hooks/useManager";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
  const { isBuyer } = useBuyer();
  const { isManager } = useManager();
  const { isAdmin } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navigation></Navigation>
      <DashboardNav></DashboardNav>
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-green-800 hover:bg-green-600 font-bold text-amber-600 drawer-button md:hidden w-full"
          >
            Dashboard Menu
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-fit">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-green-900 text-[#FDE67D] ps-5 min-h-full ">
            <div className="flex  items-center justify-center md:justify-between ">
              <img
                src={logo}
                alt="logo"
                className="md:w-16 md:h-16 md:p-1 w-12 h-12 rounded-full md:mr-3 bg-white  me-4 md:me-2"
              />
              <h2 className="text-xl md:text-2xl font-bold text-center text-amber-600">
                Rural AgroCommerce
              </h2>
            </div>
            {isAdmin ? (
              <>
                <h3 className="text-lg md:text-xl font-medium text-center pt-3 md:pt-7 text-amber-400">
                  Admin DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/adminProfile"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUser className="w-6 h-6 text-[#D1922B] me-5"></FaUser>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/adminProfileUpdate"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUserEdit className="w-6 h-6 text-[#D1922B] me-5"></FaUserEdit>
                    Profile Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/adminUserManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUserFriends className="w-6 h-6 text-[#D1922B] me-5"></FaUserFriends>
                    User Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/adminInventoryManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdOutlineInventory className="w-6 h-6 text-[#D1922B] me-5" />
                    Inventory Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaSwatchbook className="w-6 h-6 text-[#D1922B] me-5" />
                    Order Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdOutlineQueryStats className="w-6 h-6 text-[#D1922B] me-5" />
                    Insights Data
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdOutlineContentPaste className="w-6 h-6 text-[#D1922B] me-5" />
                    Content Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdSyncProblem className="w-6 h-6 text-[#D1922B] me-5" />
                    Dispute Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdOutlineSettings className="w-6 h-6 text-[#D1922B] me-5" />
                    System Settings
                  </NavLink>
                </li>
              </>
            ) : isBuyer ? (
              <>
                <h3 className="text-lg md:text-xl font-medium text-center pt-3 md:pt-7 text-amber-400">
                  Buyer DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/buyerProfile"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUser className="w-6 h-6 text-[#D1922B] me-5"></FaUser>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/buyerProfileUpdate"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUserEdit className="w-6 h-6 text-[#D1922B] me-5"></FaUserEdit>
                    Profile Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/buyerCart"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaShoppingCart className="w-6 h-6 text-[#D1922B] me-5" />
                    Cart Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/buyerOrders"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaBookReader className="w-6 h-6 text-[#D1922B] me-5" />
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/buyerTransactions"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdPayments className="w-6 h-6 text-[#D1922B] me-5" />
                    My Transactions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/buyerComposeMessages"
                    className="font-medium flex justify-start items-center mt-5 relative"
                    onMouseOver={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <TiMessages className="w-6 h-6 text-[#D1922B] me-5" />
                    Communication Hub
                    {isOpen && (
                      <ul className="absolute rounded-md shadow-md py-1 mt-40 z-20 menu p-2 w-full bg-green-700 text-[#FDE67D] min-h-full">
                        <li>
                          <NavLink
                            to="/dashboard/buyerReceivedMessages"
                            className="font-medium flex justify-start items-center mt-5"
                          >
                            <TiMessage className="w-6 h-6 text-[#D1922B] me-5" />
                            Received Messages
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/buyerSentMessages"
                            className="font-medium flex justify-start items-center mt-5 "
                          >
                            <TiMessageTyping className="w-6 h-6 text-[#D1922B] me-5" />
                            Sent Messages
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </NavLink>
                </li>
              </>
            ) : isManager ? (
              <>
                <h3 className="text-lg md:text-xl font-medium text-center pt-3 md:pt-7 text-amber-400">
                  Manager DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/managerProfile"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUser className="w-6 h-6 text-[#D1922B] me-5"></FaUser>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managerProfileUpdate"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUserEdit className="w-6 h-6 text-[#D1922B] me-5"></FaUserEdit>
                    Profile Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managerProductPipelineManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaClipboardList className="w-6 h-6 text-[#D1922B] me-5" />
                    Product Listing Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managerInventoryManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdHomeWork className="w-6 h-6 text-[#D1922B] me-5" />
                    Inventory Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managerOrderManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdBook className="w-6 h-6 text-[#D1922B] me-5" />
                    Order Review Portal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managerComposeMessages"
                    className="font-medium flex justify-start items-center mt-5 relative"
                    onMouseOver={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <MdChat className="w-6 h-6 text-[#D1922B] me-5" />
                    Communication Hub
                    {isOpen && (
                      <ul className="absolute rounded-md shadow-md py-1 mt-40 z-20 menu p-2 w-full bg-green-700 text-[#FDE67D] min-h-full">
                        <li>
                          <NavLink
                            to="/dashboard/managerReceivedMessages"
                            className="font-medium flex justify-start items-center mt-5"
                          >
                            <TiMessage className="w-6 h-6 text-[#D1922B] me-5" />
                            Received Messages
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/managerSentMessages"
                            className="font-medium flex justify-start items-center mt-5 "
                          >
                            <TiMessageTyping className="w-6 h-6 text-[#D1922B] me-5" />
                            Sent Messages
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <h3 className="text-lg md:text-xl font-medium text-center pt-3 md:pt-7 text-amber-400">
                  Farmer DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/farmerProfile"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUser className="w-6 h-6 text-[#D1922B] me-5"></FaUser>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/farmerProfileUpdate"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUserEdit className="w-6 h-6 text-[#D1922B] me-5"></FaUserEdit>
                    Profile Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/farmerAddProduct"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdOutlineAddCircle className="w-6 h-6 text-[#D1922B] me-5" />
                    Add New Product
                    <GrProductHunt />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/farmerManageProduct"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaEdit className="w-6 h-6 text-[#D1922B] me-5" />
                    Product Management
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/dashboard/"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdManageHistory className="w-6 h-6 text-[#D1922B] me-5" />
                    Product Listing History
                  </NavLink>
                </li> */}
              </>
            )}
            <hr className="my-5" />

            <li>
              <NavLink
                to="/"
                className="font-medium flex justify-start items-center mt-5"
              >
                <FaHome className="w-6 h-6 text-[#D1922B] me-5"></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="font-medium flex justify-start items-center mt-5"
              >
                <MdInventory className="w-6 h-6 text-[#D1922B] me-5" />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="font-medium flex justify-start items-center mt-5"
              >
                <MdInfo className="w-6 h-6 text-[#D1922B] me-5" />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-medium flex justify-start items-center mt-5"
              >
                <MdCall className="w-6 h-6 text-[#D1922B] me-5" />
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
