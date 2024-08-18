// Implemented with useForm Hook and server API call for data storage in DB

import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../../assets/images/Register/RegisterImg.jpg";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Title from "../../../components/Headers/Title";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const ManagerRegister = () => {
  const { createUser, userUpdate, logOut } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const farmLocations = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Mymensingh",
    "Barishal",
    "Khulna",
    "Rangpur",
    "Sylhet",
  ];
  const onSubmit = (data) => {
    const name = data.fullName;
    const email = data.email;
    const mobileNumber = data.mobileNumber;
    const photo = data.photo;
    const location = data.area;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const regDate = data.currentDate;
    // console.log(data);
    const managerDetails = {
      name,
      email,
      mobileNumber,
      photo,
      location,
      regDate,
    };
    const userDetails = {
      name,
      email,
      mobileNumber,
      photo,
      location,
      regDate,
      role: "Manager",
    };
    // console.log(managerDetails);
    // console.log(userDetails);
    if (password !== confirmPassword) {
      toast.error("Confirm Password doesn't match with Password");
      return;
    }
    // User Sign Up
    createUser(email, password)
      .then((res) => {
        const createdUser = res.user;
        console.log(createdUser);
        toast.success("Successfully Signed Up");

        // User Profile Update
        userUpdate(createdUser, name, photo)
          .then(() => {
            toast.success("User Profile successfully Updated");
            // User info add API call
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userDetails),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success("User info added to UserDB successfully");
                }
                // Manager info add API call
                fetch("http://localhost:3000/managers", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(managerDetails),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      toast.success(
                        "Manager Info added to ManagerDB successfully"
                      );
                      reset();
                      logOut();
                      navigate("/login");
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    toast.error("Failed to add Manager info to ManagerDB");
                  });
              })
              .catch((error) => {
                console.log(error);
                toast.error("Failed to add User info to UserDB");
              });
          })
          .catch(() => {
            toast.error("User Profile Update Failed");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sign Up Failed");
      });
  };
  return (
    <div>
      <Title
        main="Area Manager Registration "
        sub="We are here to empower your leadership in quality farm produce management"
      ></Title>
      <div className="">
        <div
          className="mb-0 w-full bg-cover bg-no-repeat bg-center flex justify-end items-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="md:w-[50%] w-full md:my-8">
            <div className="bg-gradient-to-r from-lime-500 to-lime-700 border-solid rounded-2xl w-[22rem] md:w-[34rem] p-6 mx-auto my-8 md:p-8 md:m-8 ">
              <h1 className="text-center font-semibold text-amber-900 text-xl md:text-3xl">
                Manager Registration Form
              </h1>
              <div className="flex items-center justify-center mt-8  text-white">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="text-sm md:text-lg font-medium text-black"
                >
                  <label>
                    <p className="mb-2">Full Name:</p>
                    <div className="h-[2.5rem]">
                      <input
                        className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        {...register("fullName", { required: true })}
                      />
                      {errors.fullName && (
                        <span className="text-red-700 text-xs block">
                          Name field is required
                        </span>
                      )}
                    </div>
                  </label>
                  <br />
                  <label>
                    <p className="mb-2"> Email:</p>
                    <div className="h-[2.5rem]">
                      <input
                        className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-red-700 text-xs block">
                          Email field is required
                        </span>
                      )}
                    </div>
                  </label>
                  <br />
                  <label>
                    <p className="mb-2">Mobile Number:</p>
                    <div className="h-[2.5rem]">
                      <input
                        className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                        type="tel"
                        name="mobileNumber"
                        placeholder="Enter your mobile number"
                        {...register("mobileNumber", {
                          required: true,
                          minLength: 11,
                          maxLength: 14,
                          pattern: /^(?:\+88|88)?(01[1-9]\d{8})$/,
                        })}
                      />
                      {errors.mobileNumber?.type === "required" && (
                        <p className="text-red-700 text-xs block" role="alert">
                          Mobile Number is required
                        </p>
                      )}
                      {errors.mobileNumber?.type === "minLength" && (
                        <p className="text-red-700 text-xs block" role="alert">
                          Number must be at least 11 characters
                        </p>
                      )}
                      {errors.mobileNumber?.type === "maxLength" && (
                        <p className="text-red-700 text-xs block" role="alert">
                          Number must be maximum of 14 characters
                        </p>
                      )}
                      {errors.mobileNumber?.type === "pattern" && (
                        <p className="text-red-700 text-xs block" role="alert">
                          Number must be a valid Bangladeshi mobile number
                        </p>
                      )}
                    </div>
                  </label>
                  <br />
                  {/* TODO - photo will be uploaded directly and stored on web storage and then set the link in DB */}
                  <div>
                    <label>
                      <p className="mb-2">Upload Your Photo URL</p>
                      <div className="h-[2.5rem]">
                        <input
                          className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg bg-white"
                          type="text"
                          placeholder="Enter photo url"
                          name="photo"
                          {...register("photo", { required: true })}
                        />
                        {errors.photo && (
                          <span className="text-red-700 text-xs block">
                            Photo URL field is required
                          </span>
                        )}
                      </div>
                    </label>

                    <br />
                    <label>
                      <p className="mb-2">Area of Responsibility:</p>
                      <div className="h-[2.5rem]">
                        <select
                          className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                          name="area"
                          {...register("area", { required: true })}
                        >
                          <option value="">Select Area Location</option>
                          {farmLocations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </select>
                        {errors.location && (
                          <span className="text-red-700 text-xs block">
                            Area field is required
                          </span>
                        )}
                      </div>
                    </label>
                    <br />
                    <label>
                      <p className="mb-2">Password:</p>
                      <div className="relative h-[2.5rem]">
                        <input
                          className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern:
                              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/,
                          })}
                        />
                        {errors.password?.type === "required" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Password field is required
                          </p>
                        )}
                        {errors.password?.type === "minLength" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Password must be at least 6 characters
                          </p>
                        )}
                        {errors.password?.type === "maxLength" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Password must be less than 20 characters
                          </p>
                        )}
                        {errors.password?.type === "pattern" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Password must contain one uppercase, one lowercase,
                            one number and one special characters
                          </p>
                        )}
                        <button
                          type="button"
                          className="absolute inset-y-1 right-[1rem] sm:right-0 px-3 py-2"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <FaEye className="text-black" />
                          ) : (
                            <FaEyeSlash className="text-black" />
                          )}
                        </button>
                      </div>
                    </label>
                    <br />
                    {/* TODO - Password and confirm password matching */}
                    <label>
                      <p className="mb-2"> Confirm Password:</p>
                      <div className="relative h-[2.5rem]">
                        <input
                          className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          {...register("confirmPassword", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern:
                              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/,
                          })}
                        />
                        {errors.confirmPassword?.type === "required" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Confirm Password field is required
                          </p>
                        )}
                        {errors.confirmPassword?.type === "minLength" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Password must be at least 6 characters
                          </p>
                        )}
                        {errors.confirmPassword?.type === "maxLength" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Password must be less than 20 characters
                          </p>
                        )}
                        {errors.confirmPassword?.type === "pattern" && (
                          <p
                            className="text-red-700 text-xs block"
                            role="alert"
                          >
                            Password must contain one uppercase, one lowercase,
                            one number and one special characters
                          </p>
                        )}
                        <button
                          type="button"
                          className="absolute inset-y-1 right-[1rem] sm:right-0 px-3 py-2"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? (
                            <FaEye className="text-black" />
                          ) : (
                            <FaEyeSlash className="text-black" />
                          )}
                        </button>
                      </div>
                    </label>

                    <br />
                    <label>
                      <p className="mb-2">Date of Registration:</p>
                      <div className="h-[2.5rem]">
                        <input
                          className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                          type="date"
                          value={currentDate}
                          readOnly
                          {...register("currentDate", { required: true })}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="flex justify-center mt-2">
                    <button
                      type="submit"
                      className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-500 hover:bg-green-700 w-20 px-3 py-2 md:w-28 md:py-3 md:px-6 text-xs md:text-base mt-5 hover:scale-110"
                    >
                      Register
                    </button>
                  </div>
                  <div className="flex justify-center items-center gap-4 mt-2">
                    <div className="text-sm md:text-xl mt-2">
                      Already have an account?
                      <Link
                        to="/login"
                        className="text-green-900 font-bold text-sm md:text-xl ml-2"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerRegister;
