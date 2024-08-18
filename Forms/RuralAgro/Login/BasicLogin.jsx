// Login Implemented with firebase

import { useContext } from "react";
import backgroundImage from "../../assets/images/Register/RegisterImg.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    userSignIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        toast.success("Successfully Logged In");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login Failed");
      });
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center flex justify-end items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-center  md:w-1/2 mt-5 md:mt-10 w-full md:my-8">
        <div className="bg-gradient-to-r from-lime-500 to-lime-700 border-solid rounded-2xl my-5 md:my-10 py-7 md:py-10 w-[24rem] md:w-[34rem]">
          <h1 className="text-center text-2xl font-bold text-emerald-900 md:text-5xl py-3 md:py-7">
            Login
          </h1>
          <div className="flex items-center justify-center mt-4 text-2xl text-white ">
            <form onSubmit={handleLogin} className="mx-auto">
              <label>
                <p className="mb-2 text-base md:text-2xl font-semibold">
                  {" "}
                  Email:
                </p>
                <input
                  className="w-[20rem] md:w-[28rem] mb-4 md:mb-7 text-black rounded-lg"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </label>
              <br />
              <label>
                <p className="mb-2 text-base md:text-2xl font-semibold">
                  {" "}
                  Password:
                </p>
                <input
                  className="w-[20rem] md:w-[28rem] mb-4 md:mb-7 text-black rounded-lg"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  required
                />
              </label>
              <br />
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-200 hover:bg-green-500 h-8 w-14 py-1 px-3 md:h-12 md:w-24 md:py-3 md:px-6 text-xs md:text-base mr-5 hover:scale-110"
                >
                  Login
                </button>
              </div>
              <div className="mt-4 text-sm md:text-base font-medium p-3 md:p-5">
                <p>
                  {" "}
                  New to Rural ArgoCommerce?{" "}
                  <Link
                    to="/authentication"
                    className="text-green-900 font-bold text-base md:text-lg"
                  >
                    Please Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
