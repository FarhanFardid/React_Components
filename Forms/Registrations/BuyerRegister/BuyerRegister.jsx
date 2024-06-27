import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/buyerRegister/buyerRegister.jpg";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const BuyerRegister = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    };
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setCurrentDate(today);
    }, []);
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
        setPhotoPreview(URL.createObjectURL(file));
    };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long and include at least one letter and one number.');
        } else {
            setPasswordError('');
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        if (newConfirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match.');
        } else {
            setConfirmPasswordError('');
        }
    };
    const validateMobileNumber = (number) => {
        const mobileNumberRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
        if (!mobileNumberRegex.test(number)) {
            setMobileNumberError('Please enter a valid Bangladeshi mobile number.');
        } else {
            setMobileNumberError('');
        }
    };

    const handleMobileNumberChange = (e) => {
        const newMobileNumber = e.target.value;
        setMobileNumber(newMobileNumber);
        validateMobileNumber(newMobileNumber);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            photo: photo ? URL.createObjectURL(photo) : null,
            fullName,
            email,
            password,
            address,
            mobileNumber,
            currentDate
        };
        console.log(formData);
        localStorage.setItem('formData', JSON.stringify(formData));
        setPhoto(null);
        setPhotoPreview(null);
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAddress('');
        setMobileNumber('');

        alert('Form data submitted successfully!');
    };
    return (
        <div className="flex xl:flex-row flex-col gap-4">
            <div className="mb-0 xl:w-[60%] xl:h-auto md:w-full md:text-6xl px-12 h-[56rem] sm:text-5xl text-4xl" style={backgroundStyle}>
                <div className="w-[28rem] text-lime-800 font-semibold leading-[5rem]">
                    We are here to connect you with quality farm produce
                </div>
            </div>
            <div className="flex items-center justify-center xl:w-[40%] xl:my-0 w-full md:my-8">
                <div className="bg-gradient-to-r from-lime-500 to-lime-700 border-solid rounded-2xl w-[22rem] sm:w-[30rem] md:w-[34rem] my-10 py-16">
                    <h1 className="text-center font-bold text-emerald-900 text-3xl sm:text-4xl md:text-5xl">Buyer Registration</h1>
                    <div className="flex items-center justify-center mt-8 text-xl text-white md:text-2xl">
                        <form onSubmit={handleSubmit}>

                            <label><p className="mb-2 text-xl md:text-2xl">Full Name:</p>
                                <div className="h-[2.5rem]">
                                    <input className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-black" type="text" value={fullName} placeholder="Enter your full name"
                                        onChange={(e) => setFullName(e.target.value)}
                                        required />
                                </div>
                            </label><br />
                            <label><p className="mb-2 text-xl md:text-2xl"> Email:</p>
                                <div className="h-[2.5rem]">
                                    <input className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-black" type="email" value={email} placeholder="Enter your email"
                                        onChange={handleEmailChange}
                                        required />
                                </div>
                                {emailError && <p className="text-red-500 text-sm w-[18rem] md:w-[28rem]">{emailError}</p>}
                            </label><br />
                            <label><p className="mb-2 text-xl md:text-2xl"> Password:</p>
                                <div className="relative h-[2.5rem]">
                                    <input
                                        className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-black"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password} placeholder="Enter your password"
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 px-3 py-1"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
                                    </button>
                                </div>
                                {passwordError && <p className="text-red-500 text-sm w-[18rem] md:w-[28rem]">{passwordError}</p>}
                            </label><br />
                            <label><p className="mb-2 text-xl md:text-2xl"> Confirm Password:</p>
                                <div className="relative h-[2.5rem]">
                                    <input className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-black" type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword} placeholder="Confirm your password"
                                        onChange={handleConfirmPasswordChange}
                                        required />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 px-3 py-2"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {showConfirmPassword ? <FaEye className="text-black" /> : <FaEyeSlash className="text-black" />}
                                    </button>
                                </div>
                                {confirmPasswordError && <p className="text-red-500 text-sm w-[18rem] md:w-[28rem]">{confirmPasswordError}</p>}
                            </label><br />
                            <label><p className="mb-2 text-xl md:text-2xl">
                                Address:
                            </p>
                                <div className='h-[2.5rem]'>
                                    <input className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-black" type="text" value={address} placeholder="Enter your location"
                                        onChange={(e) => setAddress(e.target.value)}
                                        required />
                                </div>
                            </label><br />
                            <label><p className="mb-2 text-xl md:text-2xl">Mobile Number:</p>
                                <div className='h-[2.5rem]'>
                                    <input className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-black" type="tel" value={mobileNumber} placeholder="Enter your mobile number"
                                        onChange={handleMobileNumberChange}
                                        required />
                                </div>
                                {mobileNumberError && <p className="text-red-500 text-sm w-[18rem] md:w-[28rem]">{mobileNumberError}</p>}
                            </label><br />
                            <label>
                                <p className="mb-2 text-xl md:text-2xl">Date of Registration:</p>
                                <div className='h-[2.5rem]'>
                                    <input
                                        className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-black"
                                        type="date"
                                        value={currentDate}
                                        readOnly
                                    />
                                </div>
                            </label><br />
                            <div>
                                <label><p className="mb-2 text-xl md:text-2xl">Upload Your Photo</p>
                                    <input
                                        className="w-[20rem] sm:w-[24rem] md:w-[28rem] mb-2 text-white text-sm"
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        required
                                    />
                                    {photoPreview && (
                                        <div className="mb-2">
                                            <img src={photoPreview} alt="Preview" className="h-40 w-40 object-cover rounded-full" />
                                        </div>
                                    )}
                                </label><br />
                            </div>

                            <div className="flex justify-center mt-8">
                                <button type="submit" className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-200 hover:bg-green-500 h-8 w-[12rem] py-1 px-3 md:h-12 md:w-[16rem] md:py-3 md:px-6 text-xs md:text-base mr-5 hover:scale-110">Register</button>
                            </div>
                            <div className="flex justify-center items-center gap-4 mt-2"><div className="text-xl mt-2">Already have an account?<Link to="/login" className="text-green-900 font-bold text-xl ml-2">Login</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BuyerRegister;