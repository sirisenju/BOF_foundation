import { Sling as Hamburger } from 'hamburger-react'
import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from 'react-router-dom';
// import { FaAngleDoubleRight } from "react-icons/fa";

function HamburgerMenu() {
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
          path: "/events",
          text: "Events",
        },
      ]

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      } else {
        document.body.style.overflow = 'visible'; // Enable scrolling
      }
  
      // Cleanup function to ensure scrolling is enabled when the component unmounts
      return () => {
        document.body.style.overflow = 'visible';
      };
    }, [isOpen]);
  
    // const handleToggle = () => {
    //   setIsOpen(!isOpen);
    // };
    
    return (
        <div>
            <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="overflow-clip text-white">
          <Hamburger 
            toggled={isOpen} 
            toggle={setIsOpen} 
            size={32}
            rounded
            distance="sm"
            color="white"
            />
            {isOpen && (
              <div className="fixed bg-white z-10 h-full w-[70%] top-0 right-0 p-4 overflow-clip">
                <div className="w-full flex justify-start pr-4">
                </div>
                <div className="grid place-content-start gap-y-5 pt-10 pb-10 text-black">
                  {navLinks.map((item) => (
                    <NavLink
                    to={item.path}
                    key={item.id}
                    className={({ isActive }) => {
                      return (
                        "hover:text-slate-600 hover:scale-110 text-lg transition ease-in delay-75 border-b-[#d4cfcc] border-b-2" +
                        (isActive ? "text-[#2C2C2C]" : " text-black")
                      );
                    }}
                    >
                      {item.text}
                    </NavLink>
                  ))
                  }
                </div>
              </div>
            )}
        </div>
      </OutsideClickHandler>  
        </div>
    )
}

export default HamburgerMenu
