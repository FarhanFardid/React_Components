import { useContext, useState } from "react";
import backgroundImage from "../../assets/images/farmerRegister/farmerRegister.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const Login = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  };
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (
      storedData &&
      storedData.email === email &&
      storedData.password === password
    ) {
      login();
      alert("Login Successfully");
      navigate("/home");
    } else {
      setError("Invalid email or password. Please try again.");
      setPassword("");
      setError("");
    }
  };

  return (
    <div className="text-6xl h-[100vh]" style={backgroundStyle}>
      <div className="flex items-center justify-center xl:w-1/2 xl:my-0 w-full md:my-8">
        <div className="bg-gradient-to-r from-lime-500 to-lime-700 border-solid rounded-2xl w-full md:w-[34rem] my-10 py-10">
          <h1 className="text-center text-5xl font-bold text-emerald-900">
            Login
          </h1>
          <div className="flex items-center justify-center mt-4 text-2xl text-white">
            <form onSubmit={handleSubmit}>
              <label>
                <p className="mb-2"> Email:</p>
                <input
                  className="w-[18rem] md:w-[28rem] mb-2 text-black"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </label>
              <br />
              <label>
                <p className="mb-2"> Password:</p>
                <input
                  className="w-[18rem] md:w-[28rem] mb-2 text-black"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </label>
              <br />
              {error && <p className="text-red-500 mb-4 text-xl">{error}</p>}
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-200 hover:bg-green-500 h-8 w-[12rem] py-1 px-3 md:h-12 md:w-[16rem] md:py-3 md:px-6 text-xs md:text-base mr-5 hover:scale-110"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center items-center gap-4 mt-4 text-xl font-normal">
                <Link to="/authentication" className="text-green-900 font-bold">
                  New User?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
