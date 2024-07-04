import DashboardTitle from "../../../../../components/Headers/DashboardTitle";
const FarmerProfileUpdate = () => {
  return (
    <div className="custom-bg bg-no-repeat bg-center p-8">
      <DashboardTitle
        main="Profile Management"
        sub="Manage Your Personal and Farm Details Information"
      ></DashboardTitle>

      <div className="w-full md:w-[60%] mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-90 text-black shadow-lg rounded-md ">
        <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
          Profile Info Update
        </h1>
        <form className="mb-4 text-sm md:text-lg">
          <h2 className="text-center text-[#5a9a08] font-semibold text-md md:text-xl py-3 md:py-5">
            My Profile
          </h2>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="mobile-number"
            >
              Mobile Number:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="tel"
              id="mobile-number"
              name="mobile-number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="farm-type"
            >
              Farm Type:
            </label>
            <select
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              id="farm-type"
              name="farm-type"
              required
            >
              <option value="">Select farm type</option>
              <option value="organic">Organic</option>
              <option value="dairy">Dairy</option>
              <option value="poultry">Poultry</option>
              <option value="crops">Crops</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="location"
            >
              Location:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="text"
              id="location"
              name="location"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block font-bold mb-1 text-[#5a9a08]"
              htmlFor="profile-picture"
            >
              Profile Picture:
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg box-border"
              type="file"
              id="profile-picture"
              accept="image/*"
              name="profile-picture"
            />
          </div>

          <button
            type="submit"
            className="submit-button w-full p-3 bg-[#5a9a08] rounded-md text-white font-bold text-xs md:text-base cursor-pointer transition-colors duration-100 ease-in-out hover:bg-[#4a8206]"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default FarmerProfileUpdate;
