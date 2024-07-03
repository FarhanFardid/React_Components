import DashboardTitle from "../../../../../components/Headers/DashboardTitle";
import logo from "../../../../../assets/images/logo/logo-01.png";
const FarmerProfile = () => {
  const farmerInfo = {
    farmer_id: 12345,
    farmer_name: "John Doe",
    farmer_email: "john.doe@ruralagro.com",
    location: "Rangpur",
    mobile_num: "+880-123456789",
    farm_type: "Organic",
    crops_category: "Vegetables",
    registration_date: "12-05-2024",
  };
  return (
    <div className="custom-bg bg-no-repeat bg-center p-2 md:p-8">
      <DashboardTitle
        main="My Profile"
        sub="Key Information and Personal Details"
      ></DashboardTitle>
      <div className="w-[80%] md:w-[60%] mx-auto my-3 md:my-20 p-6 md:p-20 bg-black bg-opacity-45 text-white shadow-lg rounded-md text-center">
        <div className="flex justify-center w-full">
          <div className="w-full">
            <div>
              <img
                className="w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto mb-4 md:mb-8 bg-black"
                src={logo}
                alt="Profile Picture"
              />
            </div>

            <div className="details bg-white bg-opacity-50 text-black p-3 md:p-6 rounded-md">
              <h2 className="text-xs md:text-sm font-medium pb-1 md:pb-2 ">
                Farmer_Id: {farmerInfo.farmer_id}
              </h2>
              <h2 className="text-base md:text-xl font-bold py-2 md:py-3 ">
                Name: {farmerInfo.farmer_name}
              </h2>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Mobile Number:</strong>{" "}
                <span id="display-mobile-number">{farmerInfo.mobile_num}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Email:</strong>{" "}
                <span id="display-email">{farmerInfo.farmer_email}</span>
              </p>

              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Farm Type:</strong>{" "}
                <span id="display-farm-type">{farmerInfo.farm_type}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Crop Category:</strong>{" "}
                <span id="display-farm-type">{farmerInfo.crops_category}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Location:</strong>{" "}
                <span id="display-location">{farmerInfo.location}</span>
              </p>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Registration Date:</strong>{" "}
                <span id="display-farm-size">
                  {farmerInfo.registration_date}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
