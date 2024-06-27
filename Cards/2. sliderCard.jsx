import { Link } from "react-router-dom";

const SliderCard = ({img,price,name}) => {
    return (
      <div className="card card-compact md:w-80 w-40 bg-green-300 shadow-xl rounded-md">
      <figure ><img src={img}alt="best deals Img" className='p-1 md:p-5 rounded-lg' /></figure>
      <div className="card-body text-center py-3">
        <h2 className="card-title font-bold  text-yellow-500 text-base md:text-2xl md:py-2 mx-auto">{name}</h2>
        <p className='py-2 md:py-3 text-xs md:text-lg'><span className='font-semibold text-red-800 '>Price:</span> <span className='font-bold text-green-700 '>{price} Tk / kg </span></p>
        <div className="">
        <Link to="/products"><button className=" bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-400 hover:bg-green-700 hover:scale-105 h-auto w-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base mb-4">Buy Now</button></Link>
        </div>
      </div>
    </div>
     
    );
};

export default SliderCard;