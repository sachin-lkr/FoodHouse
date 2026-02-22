import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
function Navbar() {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`max-w-full mx-auto md:px-20 px-5 py-4  flex justify-between bg-white fixed top-0 right-0 left-0  z-50  ${isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""}`}
    >
      {/* logo */}
      <div>
        <Logo />
      </div>
      <div className="hidden lg:flex  flex-1 md:items-center   ">
        <ul className="flex flex-1   justify-center gap-x-15 ">
          <li>
            <a href="/" className=" navlink text-orange-500 ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navlink">
              About Us
            </a>
          </li>
          <li>
            <a href="#process" className="navlink">
              Process
            </a>
          </li>
          <li>
            <a href="#contact" className="navlink">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex border-orange-500  border-2 p-1 rounded-full ">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none px-3"
          />
          <IoSearchSharp className="text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 rounded-full p-1" />
        </div>
      </div>
      {/* icons */}
      <div className="flex  gap-x-2 items-center ml-auto md:ml-2 ">
        <a href="#">
          <FaHeart className="text-2xl" />
        </a>
        <a href="#">
          <RiShoppingBag4Fill className="text-2xl" />
        </a>
        {show ? (
          <GiHamburgerMenu
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => {
              setShow(false);
            }}
          />
        ) : (
          <RiMenu3Fill
            className="text-2xl font-bold"
            onClick={() => {
              setShow(true);
            }}
          />
        )}
      </div>
      <div>
        <ul
          className={`flex flex-col gap-6 absolute  ${!show ? "left-1/2 transform duration-500" : "-left-full transform duration-500"} transform -translate-x-1/2 top-30 backdrop-blur-lg rounded-2xl bg-orange-500/50 p-8 items-center`}
        >
          <li>
            <a href="#" className=" navlink text-orange-500 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navlink">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="navlink">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="navlink">
              Contact Us
            </a>
          </li>
          <li className="flex border-orange-500  border-2 p-1 rounded-full ">
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none px-3"
            />
            <IoSearchSharp className="text-3xl text-white bg-orange-500 rounded-full p-1" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
