import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Authentication from "../../Pages/Authentication/Authentication";
import About from "../../Pages/About/About";
import Products from "../../Pages/Products/Products";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import PrivacyPolicy from "../../Pages/Privacy/PrivacyPolicy";
import Terms from "../../Pages/Terms/Terms";
import HelpSupport from "../../Pages/HelpSupport/HelpSupport";
import FarmerRegister from "../../Pages/Registration/FarmerRegister/FarmerRegister";
import BuyerRegister from "../../Pages/Registration/BuyerRegister/BuyerRegister";
import ManagerRegister from "../../Pages/Registration/ManagerRegister/ManagerRegister";
import Dashboard from "../../Layout/Dashboard";
import BuyerProfile from "../../Pages/DashboardPages/BuyerPages/Profile/BuyerProfile/BuyerProfile";
import AddProduct from "../../Pages/DashboardPages/FarmerPages/AddProduct/AddProduct";

import ProductManagement from "../../Pages/DashboardPages/FarmerPages/ProductManagement/ProductManagement";
import ProductUpdate from "../../Pages/DashboardPages/FarmerPages/ProductUpdate/ProductUpdate";
import FarmerProfile from "../../Pages/DashboardPages/FarmerPages/Profile/FarmerProfile/FarmerProfile";
import FarmerProfileUpdate from "../../Pages/DashboardPages/FarmerPages/Profile/FarmerProfileUpdate/FarmerProfileUpdate";
import BuyerProfileUpdate from "../../Pages/DashboardPages/BuyerPages/Profile/BuyerProfileUpdate/BuyerProfileUpdate";
import BuyerOrders from "../../Pages/DashboardPages/BuyerPages/MyOrders/BuyerOrders";
import BuyerPayments from "../../Pages/DashboardPages/BuyerPages/Payments/BuyerPayments";
import ManagerProfile from "../../Pages/DashboardPages/ManagerPages/Profile/ManagerProfile/ManagerProfile";
import ManagerProfileUpdate from "../../Pages/DashboardPages/ManagerPages/Profile/ManagerProfileUpdate/ManagerProfileUpdate";
import AdminProfile from "../../Pages/DashboardPages/AdminPages/Profile/AdminProfile/AdminProfile";
import AdminProfileUpdate from "../../Pages/DashboardPages/AdminPages/Profile/AdminProfileUpdate/AdminProfileUpdate";
import CartManagement from "../../Pages/DashboardPages/BuyerPages/CartManagement/CartManagement";
import BuyerCheckout from "../../Pages/DashboardPages/BuyerPages/BuyerCheckout/BuyerCheckout";
import BuyerShippingDetails from "../../Pages/DashboardPages/BuyerPages/BuyerShippingDetails/BuyerShippingDetails";
import OrderDetails from "../../Pages/DashboardPages/BuyerPages/MyOrders/OrderDetails";
import MyTransactions from "../../Pages/DashboardPages/BuyerPages/MyTransactions/MyTransactions";
import BuyerReceivedMessage from "../../Pages/DashboardPages/BuyerPages/Messages/BuyerReceivedMessage";
import BuyerSentMessage from "../../Pages/DashboardPages/BuyerPages/Messages/BuyerSentMessage";
import BuyerComposeMessage from "../../Pages/DashboardPages/BuyerPages/Messages/BuyerComposeMessage";
import Error from "../../Pages/Error/Error";
import BuyerCardPayment from "../../Pages/DashboardPages/BuyerPages/Payments/BuyerCardPayment";
import BuyerBkashPayment from "../../Pages/DashboardPages/BuyerPages/Payments/BuyerBkashPayment";
import BuyerNogodPayment from "../../Pages/DashboardPages/BuyerPages/Payments/BuyerNogodPayment";
import BuyerBankPayment from "../../Pages/DashboardPages/BuyerPages/Payments/BuyerBankPayment";
import ManagerOrderManagement from "../../Pages/DashboardPages/ManagerPages/OrderManagement/ManagerOrderManagement";
import ManagerInventoryManagement from "../../Pages/DashboardPages/ManagerPages/InventoryManagement/ManagerInventoryManagement";
import ManagerComposeMessage from "../../Pages/DashboardPages/ManagerPages/Messages/ManagerComposeMessage";
import ManagerReceivedMessage from "../../Pages/DashboardPages/ManagerPages/Messages/ManagerReceivedMessage";
import ManagerSentMessage from "../../Pages/DashboardPages/ManagerPages/Messages/ManagerSentMessage";
import ProductPipeline from "../../Pages/DashboardPages/ManagerPages/ProductPipelineManagement/ProductPipeline";
import UserManagement from "../../Pages/DashboardPages/AdminPages/UserManagement/UserManagement";
import AdminInventoryManagement from "../../Pages/DashboardPages/AdminPages/InventoryManagement/AdminInventoryManagement";
import InventoryReport from "../../Pages/DashboardPages/AdminPages/InventoryManagement/InventoryReport";
import PrivateRoutes from "../ProtectedRoutes/PrivateRoutes";
import BuyerRoutes from "../ProtectedRoutes/BuyerRoutes";
import ManagerRoutes from "../ProtectedRoutes/ManagerRoutes";
import AdminRoutes from "../ProtectedRoutes/AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "authentication",
        element: <Authentication></Authentication>,
      },
      {
        path: "farmerRegister",
        element: <FarmerRegister></FarmerRegister>,
      },
      {
        path: "buyerRegister",
        element: <BuyerRegister></BuyerRegister>,
      },
      {
        path: "managerRegister",
        element: <ManagerRegister></ManagerRegister>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
      {
        path: "help",
        element: <HelpSupport></HelpSupport>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // Farmer Dashboard Routes Start
      {
        path: "farmerProfile",
        element: <FarmerProfile></FarmerProfile>,
      },
      {
        path: "farmerProfileUpdate",
        element: <FarmerProfileUpdate></FarmerProfileUpdate>,
      },
      {
        path: "farmerAddProduct",
        element: <AddProduct></AddProduct>,
      },

      {
        path: "farmerManageProduct",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "farmerUpdateProduct/:id",
        element: <ProductUpdate></ProductUpdate>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:3000/farmerProduct/${params.id}`);
          if (!response.ok) {
            throw new Error("Failed to load product data");
          }
          return response.json();
        }
      },
      // Farmer Dashboard Routes End

      // Buyer Dashboard Routes Start
      {
        path: "buyerProfile",
        element: (
          <BuyerRoutes>
            <BuyerProfile></BuyerProfile>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerProfileUpdate",
        element: (
          <BuyerRoutes>
            <BuyerProfileUpdate></BuyerProfileUpdate>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerCart",
        element: (
          <BuyerRoutes>
            <CartManagement></CartManagement>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerCheckout",
        element: (
          <BuyerRoutes>
            {" "}
            <BuyerCheckout></BuyerCheckout>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerShipping",
        element: (
          <BuyerRoutes>
            <BuyerShippingDetails></BuyerShippingDetails>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerOrders",
        element: (
          <BuyerRoutes>
            <BuyerOrders></BuyerOrders>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerOrderDetails/:order_Id",
        element: (
          <BuyerRoutes>
            <OrderDetails></OrderDetails>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerPaymentsMethod",
        element: (
          <BuyerRoutes>
            <BuyerPayments></BuyerPayments>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerCardPayment",
        element: (
          <BuyerRoutes>
            <BuyerCardPayment></BuyerCardPayment>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerBkashPayment",
        element: (
          <BuyerRoutes>
            <BuyerBkashPayment></BuyerBkashPayment>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerNogodPayment",
        element: (
          <BuyerRoutes>
            <BuyerNogodPayment></BuyerNogodPayment>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerBankPayment",
        element: (
          <BuyerRoutes>
            <BuyerBankPayment></BuyerBankPayment>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerTransactions",
        element: (
          <BuyerRoutes>
            <MyTransactions></MyTransactions>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerComposeMessages",
        element: (
          <BuyerRoutes>
            <BuyerComposeMessage></BuyerComposeMessage>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerReceivedMessages",
        element: (
          <BuyerRoutes>
            <BuyerReceivedMessage></BuyerReceivedMessage>
          </BuyerRoutes>
        ),
      },
      {
        path: "buyerSentMessages",
        element: (
          <BuyerRoutes>
            <BuyerSentMessage></BuyerSentMessage>
          </BuyerRoutes>
        ),
      },

      // Buyer Dashboard Routes End

      // Admin Dashboard Routes Start
      {
        path: "adminProfile",
        element: (
          <AdminRoutes>
            <AdminProfile></AdminProfile>
          </AdminRoutes>
        ),
      },
      {
        path: "adminProfileUpdate",
        element: (
          <AdminRoutes>
            <AdminProfileUpdate></AdminProfileUpdate>
          </AdminRoutes>
        ),
      },
      {
        path: "adminUserManagement",
        element: (
          <AdminRoutes>
            <UserManagement></UserManagement>
          </AdminRoutes>
        ),
      },
      {
        path: "adminInventoryManagement",
        element: (
          <AdminRoutes>
            <AdminInventoryManagement></AdminInventoryManagement>
          </AdminRoutes>
        ),
      },
      {
        path: "adminInventoryReport",
        element: (
          <AdminRoutes>
            <InventoryReport></InventoryReport>
          </AdminRoutes>
        ),
      },

      // Admin Dashboard Routes End

      // Manager Dashboard Routes Start
      {
        path: "managerProfile",
        element: (
          <ManagerRoutes>
            <ManagerProfile></ManagerProfile>
          </ManagerRoutes>
        ),
      },
      {
        path: "managerProfileUpdate",
        element: (
          <ManagerRoutes>
            <ManagerProfileUpdate></ManagerProfileUpdate>
          </ManagerRoutes>
        ),
      },
      {
        path: "managerProductPipelineManagement",
        element: (
          <ManagerRoutes>
            <ProductPipeline></ProductPipeline>
          </ManagerRoutes>
        ),
      },
      {
        path: "managerOrderManagement",
        element: (
          <ManagerRoutes>
            <ManagerOrderManagement></ManagerOrderManagement>
          </ManagerRoutes>
        ),
      },
      {
        path: "managerInventoryManagement",
        element: (
          <ManagerRoutes>
            <ManagerInventoryManagement></ManagerInventoryManagement>
          </ManagerRoutes>
        ),
      },
      {
        path: "managerComposeMessages",
        element: (
          <ManagerRoutes>
            <ManagerComposeMessage></ManagerComposeMessage>
          </ManagerRoutes>
        ),
      },
      {
        path: "managerReceivedMessages",
        element: (
          <ManagerRoutes>
            {" "}
            <ManagerReceivedMessage></ManagerReceivedMessage>
          </ManagerRoutes>
        ),
      },
      {
        path: "managerSentMessages",
        element: (
          <ManagerRoutes>
            <ManagerSentMessage></ManagerSentMessage>
          </ManagerRoutes>
        ),
      },
    ],
  },
  // Manager Dashboard Routes End
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
