// Hire Crew Project demo benefitsCard Component
// Change design , content and logo as necessary

const BenefitCard = ({ info }) => {
  const { heading, details, icon } = info;
  return (
    <div className="card bg-gray-100 md:w-96 shadow-2xl rounded-md relative  border-b-8 border-[#e01133fc]">
      <div className="h-20 w-20 md:h-28 md:w-28 mx-auto -mt-10 md:-mt-16 mb-4 relative border-2 border-dotted  border-[#e01133fc] rounded-full p-2 bg-white">
        <div className="h-full w-full rounded-full  flex items-center justify-center bg-[#e01133fc]">
          <img
            src={icon}
            alt="images"
            className="w-8 h-8  md:w-20 md:h-20 md:p-4"
          />
        </div>
      </div>
      <div className="card-body items-center text-center pt-1 md:pt-2">
        <h2 className="card-title text-lg md:text-2xl font-medium">
          {heading}
        </h2>
        <p className="text-black font-medium py-2 px-1 md:py-4 md:px-3 m-2 text-xs md:text-base">
          {details}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
