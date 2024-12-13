import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./hamburger";

function NavBar({ onDonateClick }) {
  const navLinks = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/media",
      text: "Media",
    },
    {
      id: 4,
      path: "/gallery",
      text: "Gallery",
    },
    {
      id: 5,
      path: "/events",
      text: "Events",
    },
  ]
  return (
    <><header className="hidden lg:w-[90%] mx-auto bg-transparent md:flex justify-between items-center px-5 h-16 text-white 2xl:max-w-7xl">
      <div className="h-[60px] w-[60px] mt-4">
        <img className="w-full h-full object-cover object-center" src="./assets/bof.png" alt="" />
      </div>
      <nav className="">
        <ul className="flex gap-10">
          {navLinks.map((index) => (
            <NavLink
              key={index.id}
              to={index.path}
              className={({ isActive }) =>
                isActive ? "text-white hover:scale-125 transition-all ease-in-out hover:underline underline-offset-8" : "text-[#F3F7F0]"
              }
            >
              {index.text}
            </NavLink>
          ))}
        </ul>
      </nav>
      <button
        onClick={onDonateClick}
        className="bg-green-400 px-14 py-2 rounded-full text-base font-semibold"
      >
        Give
      </button>
    </header>
      <div className="block md:hidden"><HamburgerMenu /></div>
    </>
  );
}

export default NavBar;
