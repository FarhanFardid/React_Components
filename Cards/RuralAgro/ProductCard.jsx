import { useContext } from "react";
import CartContext from "../../context/CartProvider/CartProvider";
import useBuyer from "../../Hooks/useBuyer";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { isBuyer } = useBuyer();
  const {
    _id,
    productImage,
    productName,
    productPrice,
    productUnit,
    farmerLocation,
    productQuantity,
  } = product;
  const { handleAddToCart } = useContext(CartContext);
  const addItemToCart = () => {
    const selectedItem = {
      productId: _id,
      productImage,
      productName,
      productPrice,
      productUnit,
      farmerLocation,
      email: user.email,
      status: "pending",
    };
    handleAddToCart(selectedItem);
  };
  return (
    <div className="card h-full md:w-96 bg-base-100 shadow-md shadow-green-400 mx-auto rounded-xl flex flex-col">
      <figure className="px-10 pt-10 w-60 h-52 md:w-96 md:h-72">
        <img
          src={productImage}
          alt="products Img"
          className="rounded-lg w-full h-full"
        />
      </figure>
      <div className="card-body items-center text-center flex-grow">
        <h2 className="card-title font-bold text-yellow-500 pt-3 md:pt-5 text-base  md:text-2xl">
          {productName}
        </h2>
        <p className="py-2 md:py-3 text-xs md:text-lg">
          <span className="font-semibold text-red-800 ">Price:</span>{" "}
          <span className="font-bold text-green-700 ">
            {productPrice} Tk / {productUnit}
          </span>
        </p>
        <div className="card-actions mt-auto">
          {isBuyer && productQuantity > 10 && (
            <button
              onClick={addItemToCart}
              className="bg-green-900 text-yellow-400 btn-md rounded-lg font-bold hover:text-amber-400 hover:bg-green-700 hover:scale-105 h-auto w-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base mb-4"
            >
              Add to Cart
            </button>
          )}

          {isBuyer && productQuantity > 0 && productQuantity <= 10 && (
            <button
              onClick={addItemToCart}
              className="bg-yellow-600 text-white btn-md rounded-lg font-bold h-auto w-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base mb-4 hover:bg-yellow-800 hover:scale-105"
            >
              Low Stock
            </button>
          )}

          {isBuyer && productQuantity == 0 && (
            <button
              className="bg-red-800 text-white btn-md rounded-lg font-bold h-auto w-auto py-2 px-4 md:py-3 md:px-6 text-xs md:text-base mb-4"
              disabled
            >
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
