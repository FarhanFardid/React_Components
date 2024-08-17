// Hire Crew Project demo RolesCard Component
// Change design , content and logo as necessary

import icon3 from "../../assets/Icons/Icon 3.svg";
const RoleCard = ({ info }) => {
  const { heading, details, img } = info;
  return (
    <div className="card bg-white md:w-96 shadow-2xl rounded-md">
      <figure className="p-2 md:p-4">
        <img src={img} alt="images" className="rounded-lg" />
      </figure>
      <div className="card-body items-center text-center pt-1 md:pt-2">
        <h2 className="card-title text-lg md:text-2xl font-medium">
          {heading}
        </h2>
        <p className="text-black font-medium py-2 px-1 md:py-4 md:px-2  text-xs md:text-base">
          {details}
        </p>
        <div className="card-actions flex items-center justify-center text-red-600 pb-4">
          <button className="btn text-xs md:text-sm font-medium">
            Contact Us{" "}
          </button>
          <img src={icon3} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
