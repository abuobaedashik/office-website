import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "./Provider/Authprovider";
import { MdFavoriteBorder, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { SiBrandfolder } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { MdReviews } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import ThemeControl from "./ThemeControl";
import logo from "../assets/download-removebg-preview.png";

const Navbar = () => {
  const { user, logOutUser } = useContext(Authcontext);
  const [isScrolled, setIsScrolled] = useState(false);
  const todayDate = new Date().toLocaleDateString();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // manubar links
  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-1 py-1 text-xl font-semibold flex gap-1 items-center"
            : " flex gap-1 items-center"
        }
        to="/"
      >
        <span>
          <IoIosHome></IoIosHome>
        </span>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-1 text-xl bg-[#b4d4ff] font-semibold flex gap-1 items-center"
            : "flex gap-1 items-center "
        }
        to="/about"
      >
        <MdReviews></MdReviews>
        About Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-1 text-xl bg-[#b4d4ff] font-semibold flex gap-1 items-center"
            : " flex gap-1 items-center"
        }
        to="/contact"
      >
        <IoAddCircleOutline />
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 py-1 text-xl bg-[#b4d4ff] font-semibold flex gap-1 items-center"
            : " flex gap-1 items-center"
        }
        to="/course"
      >
        <CgProfile></CgProfile>
        Our Course
      </NavLink>
    </>
  );

  return (
    <div>
      <div
        className={`navbar text-base text-[#ffff] font-bold bg-[#ff1e1e] py-5   md:max-w-[1920px]  ${
          isScrolled ? "flex navbar max-w-[1920px] delay-150  fixed z-10" : ""
        }`}
      >
        <div className="flex px-12 items-center justify-between w-full">
          <div className="flex gap-3 items-center">
            <p>+8801765262296</p>
            <p>abuobaedashik@gmail.com</p>
          </div>
          <p>Date:{todayDate}</p>
        </div>
      </div>
      <div
        className={`navbar   md:max-w-[1920px]  fixed z-50 md:py-6 py-2  sm:mb-2 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFFFFF]  navbar max-w-[1920px]  fixed z-10 "
            : "bg-[#66D2CE]"
        }`}
      >
        <div className="navbar-start hidden sm:flex">
          <a className="font-bold  text-3xl">
            <img src={logo} alt="" className="w-12 h-12 rounded-full" />
          </a>
          <p className="text-xl font-bold ">
            {" "}
            <span className="text-2xl font-custom  text-[#FF1E1E]">P&P</span> IT
            Zone
          </p>
        </div>
        {/* small device */}
        <div className="navbar-start sm:hidden flex ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <MdMenu className="mt-1 w-8"></MdMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
        </div>

        {/* small device  */}
        <div className="navbar-center sm:hidden flex">
          <a className="font-bold  text-xl">
            <img src={logo} alt="" className="w-6 h-6 rounded-full" />
          </a>
          <p className="text-xl font-bold ">
            {" "}
            <span className="text-2xl font-custom  text-[#FF1E1E]">P&P</span> IT
            Zone
          </p>
        </div>
        {/* large device */}
        <div className="navbar-center hidden sm:flex items-center justify-between gap-3 ">
          {link}
        </div>

        {/* user profile */}
        <div className="navbar-end ml-1 flex items-center gap-4 ">
          <ThemeControl></ThemeControl>
          <div className="pro md:flex flex-col md:flex-row items-center justify-center ">
            <div>
              {user && user?.email ? (
                <div className=" font-medium ">
                  <img
                    src={user?.photoURL}
                    className="w-5 h-5 rounded-full object-cover"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="hidden sm:flex">
              {user && user?.email ? (
                <div className="md:text-base text-xs font-medium  items-center justify-center">
                  {" "}
                  {user?.displayName}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="  border">
            {/* login and logout toggle */}
            {user && user?.email ? (
              <div
                onClick={logOutUser}
                className="cursor-pointer bg-[#FF1E1E] text-base text-[#ffffff] px-3 py-1 rounded-sm"
              >
                Logout
              </div>
            ) : (
              <div className="cursor-pointer flex flex-col rounded-[20px] text-[#ffffff] sm:flex-row bg-[#FF1E1E] px-0 py-1 ">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base  px-3 py-1 bg-[#b4d4ff] font-bold"
                      : "text-base font-bold rounded-md mx-2"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base px-3 py-1 bg-[#b4d4ff] w-full font-bold hidden md:flex"
                      : "text-base font-bold rounded-md mx-2 hidden md:flex"
                  }
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
