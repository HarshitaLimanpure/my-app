
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="bg-cover bg-no-repeat fixed z-10 flex px-9 py-3.5 text-white justify-between text-2xl font-medium h-20 w-screen items-center"
        style={{ backgroundImage: "url('./images/source.gif')" }}
      >
        <img src="./images/hl.png" alt="logo" className="m-6 h-16 w-24" />

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links - Shown on Large Screens */}
        <ul className="hidden md:flex gap-7 mr-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        {/* Mobile Menu - Shown on Small Screens when Hamburger is clicked */}
        {isOpen && (
          <ul className="absolute top-20 left-0 w-full bg-black text-center md:hidden">
            <li className="py-2">
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#about" onClick={toggleMenu}>
                About Me
              </a>
            </li>
            <li className="py-2">
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li className="py-2">
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li className="py-2">
              <a href="#contact" onClick={toggleMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;


