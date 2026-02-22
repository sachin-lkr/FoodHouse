import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Button from "../Button/Button";

function Card({ image, name, price }) {
  return (
    <div  className="bg-zinc-100 p-4 rounded-2xl 
           transition-all duration-300 ease-in-out
           hover:scale-105 hover:shadow-xl">
      {/* icons */}
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button className="text-xl text-white bg-orange-500 px-3 py-2 rounded-lg ">
          <FaPlus />
        </button>
      </div>
      {/* image */}
      <div className="w-full h-50 "><img src={image} alt={name}  className="w-full h-full object-contain"/></div>
      {/* name */}
      <div className="text-center ">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h3 className="text-xl font-bold my-2">{price} $ </h3>
        <Button title="Shop Now" />
      </div>
    </div>
  );
}
export default Card;
