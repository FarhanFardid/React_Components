// Change elements and path as necessary.
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
import AddProduct from "../../Pages/DashboardPages/FarmerPages/AddProduct/AddProduct";

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
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:"addProduct",
        element:<AddProduct></AddProduct>
      },
      // {
      //   path:"/manageProduct",
      //   element:<></>
      // },
      // {
      //   path:"/updateProduct",
      //   element:<></>
      // },
    ]
  },
]);

export default router;
