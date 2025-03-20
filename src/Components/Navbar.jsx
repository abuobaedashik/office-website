import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "./Provider/Authprovider";
import { MdEmail, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdReviews } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import ThemeControl from "./ThemeControl";
import logo from "../assets/download-removebg-preview.png";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOutUser } = useContext(Authcontext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle
  const todayDate = new Date().toLocaleDateString();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu Links
  const link = (
    <>
      <NavLink
        className="flex gap-1 font-roboto font-bold text-base items-center"
        to="/"
      >
        <IoIosHome /> Home
      </NavLink>
      <NavLink
        className="flex gap-1 font-roboto font-bold text-base items-center"
        to="/about"
      >
        <MdReviews /> About Us
      </NavLink>
      <NavLink
        className="flex gap-1 font-roboto font-bold text-base items-center"
        to="/contact"
      >
        <IoAddCircleOutline /> Contact
      </NavLink>
      <NavLink
        className="flex gap-1 font-roboto font-bold text-base items-center"
        to="/course"
      >
        <CgProfile /> Our Course
      </NavLink>
    </>
  );

  return (
    <div className="fixed left-1/2 -translate-x-1/2 mx-auto max-w-[1920px] top-0  w-full z-50">
      {/* Red Section Hidden on Small Screens */}
      <div className="bg-[#FF1E1E] text-xl text-[#f0f0f0] py-4 max-w-[1920px] w-full px-6 flex justify-between items-center hidden sm:flex">
        <p className="font-semibold text-xl flex items-center gap-2">
          <p>
            <FaPhoneAlt />
          </p>
          +8801765262296{" "}
        </p>
        <div className="flex items-center gap-3">
          <p className="font-semibold text-xl flex items-center gap-2">
            <p>
              <MdEmail />
            </p>
            abubaedashik@gmail.com{" "}
          </p>
          <p className="font-semibold text-xl flex items-center gap-2">
            <p>
              <MdEmail />
            </p>
            mdashik872345@gmail.com{" "}
          </p>
          <p className="text-xl font-semibold">
            Date: {todayDate}
          </p>
        </div>
      </div>

      {/* Navbar Section */}
      <div
        className={`transition-all duration-500 max-w-[1920px] top-0 left-0 w-full z-50  ${
          isScrolled
            ? "bg-white shadow-lg py-3"
            : "bg-[#87f2c7] py-4 "
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <p className="text-xl font-nunito font-semibold">
              <span className="text-2xl font-custom text-[#FF1E1E]">3D</span>{" "}
              Cluster
            </p>
          </div>

          {/* Menu Links */}
          <div className="hidden sm:flex items-center gap-6">{link}</div>

          {/* Hamburger Icon for Mobile */}
          <div className="sm:hidden flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MdMenu className="text-2xl text-[#FF1E1E]" />
            </button>
          </div>

          {/* Theme Control & User */}
          <div className="flex items-center gap-4">
            <ThemeControl />
            {user?.email ? (
              <div className="flex items-center gap-2">
                <img
                  src={user?.photoURL}
                  className="w-6 h-6 rounded-full object-cover"
                  alt="User"
                />
                <p className="text-sm font-medium">{user?.displayName}</p>
              </div>
            ) : null}

            {/* Login/Logout */}
            {user?.email ? (
              <button
                onClick={logOutUser}
                className="px-4 py-1 rounded-2xl  text-lg font-base hover:bg-[#1F2937]  bg-[#ff1e1e] text-[#ffffff]"
              >
                Logout
              </button>
            ) : (
              <div className="flex gap-2">
                <NavLink
                  to="/login"
                  className="px-4 py-1 rounded-2xl text-lg font-base hover:bg-[#1F2937]  bg-[#ff1e1e] text-[#ffffff]"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="hidden md:block px-4 py-1 rounded-2xl text-lg font-base hover:bg-[#1F2937]  bg-[#ff1e1e] text-[#ffffff]"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Toggle Visibility) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#87f2c7] py-4">
          <div className="flex flex-col items-center gap-4">{link}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
