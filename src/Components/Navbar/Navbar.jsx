import Logo from "../../images/logo/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Gallery",
      link: "/gallery",
    },
    {
      id: 4,
      name: "Schedule",
      link: "/schedule",
    },

    {
      id: 5,
      name: "Contact",
      link: "/contact",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="w-full z-10 bg-black text-white px-3 py-3 sm:px-5 sm:py-5 
      sm:grid sm:grid-cols-12 sm:items-center flex items-center justify-between"
    >
      <Link to="/" className={`${isOpen && "hidden"} sm:col-span-3`}>
        <img src={Logo} alt="" />
      </Link>

      {/* for big screen */}
      <div className="sm:col-span-9 hidden sm:flex items-center justify-between">
        <ul className="ml-12 sm:col-span-4 sm:flex gap-12">
          {navLinks.map((item) => (
            <li className="font-medium duration-200 ease-in-out" key={item.id}>
              <NavLink
                to={item.link}
                className={
                  location.pathname === item.link
                    ? "text-[#ff0335ff] hover:text-[#ff0335ff] duration-200 ease-in-out"
                    : "hover:text-[#ff0335ff] duration-200 ease-in-out"
                }
              >
                {" "}
                {item.name}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-12">
          <button className="py-2 px-5 font-medium bg-[#ff0335ff] hover:bg-transparent hover:border hover:border-white hover:text-white ease-in duration-150 ">
            <Link to="/register">Register</Link>
          </button>
          <button className=" py-2 px-5 font-medium bg-white hover:bg-[#ff0335ff] hover:text-white text-[#ff0335ff] border border-[#ff0335ff] ease-in duration-150">
            <Link to="/contact">Join Classes</Link>
          </button>
        </div>
      </div>

      <div className="sm:hidden flex">
        <IoMenu
          onClick={toggleSidebar}
          className={`${
            isOpen && "hidden"
          } text-4xl hover:text-[#ff0335ff] hover:ease-in-out hover:duration-150 hover:scale-110`}
        />
      </div>

      {isOpen && (
        <div className="w-full h-screen flex flex-col items-center gap-10 relative transition-transform translate-y-0 duration-300 ease-in-out">
          <IoCloseOutline
            onClick={toggleSidebar}
            className="absolute top-0 right-0 text-4xl hover:text-[#ff0335ff] hover:ease-in-out hover:duration-150 hover:scale-110"
          />
          <ul className="mt-14 flex flex-col gap-5">
            {navLinks.map((item) => (
              <li
                className="font-medium hover:text-[#ff0335ff] duration-200 ease-in-out"
                key={item.id}
              >
                <Link to={item.link} onClick={toggleSidebar}> {item.name} </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <button className="py-2 px-5 font-medium bg-[#ff0335ff] hover:bg-transparent hover:border hover:border-white hover:text-white ease-in duration-150 ">
              <Link to="/register">Register</Link>
            </button>
            <button className=" py-2 px-5 font-medium bg-white hover:bg-[#ff0335ff] hover:text-white text-[#ff0335ff] border border-[#ff0335ff] ease-in duration-150">
              <Link to="/contact">Join Classes</Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
