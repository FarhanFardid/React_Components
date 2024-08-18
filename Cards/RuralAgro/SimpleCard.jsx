// DaisyUI cards component
// Changes the styles and info as needed.

const TrendCard = ({ img, pro_name, details }) => {
    return (
      <div>
        <div className="card md:w-96 bg-base-100 bg-green-100 shadow-md shadow-yellow-200 mx-auto rounded-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Trending Products" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-yellow-500 pt-3 md:pt-5 text-base  md:text-2xl">
              {pro_name}
            </h2>
            <p className="text-sm md:text-lg p-2 md:p-4">{details}</p>
  
            <div className="card-actions">
              <button className=" bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-400 hover:bg-green-700 hover:scale-105 h-auto w-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base mb-4">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrendCard;
  