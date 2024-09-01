// DaisyUI Hero component
// Change content and Img as necessary

import img from "../../assets/images/gallery/gallery-9.jpg";
const Poster = () => {
  return (
    <div className="hero bg-base-200 my-10 md:my-16 bg-green-400">
      <div className="w-full hero-content flex flex-col-reverse md:flex-row-reverse p-5 md:p-14 text-center md:text-left">
        <img
          src={img}
          className="max-w-full md:max-w-2xl rounded-lg shadow-lg m-2 md:m-4 "
        />
        <div className="py-4 px-2 md:px-6 md:py-5">
          <h1 className="text-xl md:text-4xl font-bold text-amber-700 text-center">
            Empowering Rural Communities with Rural AgroCommerce
          </h1>
          <p className="py-3 md:py-6 text-sm md:text-lg text-justify">
            Discover the future of farming with Rural AgroCommerce, an
            innovative agro-based e-commerce platform designed to connect rural
            farmers directly to consumers and markets. Our mission is to empower
            rural communities by providing them with the tools and resources
            needed to thrive in the digital age. By leveraging cutting-edge
            technology, Rural AgroCommerce enables farmers to showcase and sell
            their produce, livestock, and handmade goods to a broader audience,
            ensuring fair prices and reducing the dependency on middlemen.
          </p>
          <button className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold  hover:text-amber-400 hover:bg-green-700 hover:scale-110 h-auto w-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
