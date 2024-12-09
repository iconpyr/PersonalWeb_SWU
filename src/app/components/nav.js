"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed left-0 top-0 bg-white z-[9999999999] w-full border-b-2 border-b-black h-16 md:h-20">
        <div className="z-20 w-full h-full flex items-center text-black">
          <a
            href=""
            className="px-5 lg:px-8 h-full flex items-center 
            justify-center max-xl:mr-auto duration-150 hover:bg-gray-400 border-r-2 border-black"
          >
            <div className="items-center justify-center flex w-auto font-bold text-2xl  h-full">
              ICONPYR
            </div>
          </a>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="xl:hidden mr-4 z-50 space-y-1.5 cursor-pointer"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <ul
            className="z-10 items-center justify-end 3xl:justify-start 
            hidden xl:flex h-full w-full gap-36 3xl:gap-12 px-10"
          >
            <li>
              <a
                href="#aboutme"
                className="relative overflow-hidden cursor-pointer flex 
                items-center justify-center gap-1 
                hover:bg-black hover:text-white px-2 
                py-1 rounded-lg uppercase text-sm 
                2xl:text-base 3xl:text-xl font-semibold 
                duration-300 w-full"
              >
                about me
              </a>
            </li>
            <li>
              <a
                href="#MyWork"
                className="relative overflow-hidden cursor-pointer flex 
                items-center justify-center gap-1 
                hover:bg-black hover:text-white px-2 
                py-1 rounded-lg uppercase text-sm 
                2xl:text-base 3xl:text-xl font-semibold 
                duration-300 w-full"
              >
                my work
              </a>
            </li>
            <li>
              <a
                href="#activity"
                className="relative overflow-hidden cursor-pointer flex 
                items-center justify-center gap-1 
                hover:bg-black hover:text-white px-2 
                py-1 rounded-lg uppercase text-sm 
                2xl:text-base 3xl:text-xl font-semibold 
                duration-300 w-full"
              >
                Activities
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative overflow-hidden cursor-pointer flex 
                items-center justify-center gap-1 
                hover:bg-black hover:text-white px-2 
                py-1 rounded-lg uppercase text-sm 
                2xl:text-base 3xl:text-xl font-semibold 
                duration-300 w-full"
              >
                contact
              </a>
            </li>
          </ul>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="xl:hidden fixed top-16 md:top-20 left-0 w-full bg-white border-b-2 border-b-black">
              <ul className="flex flex-col items-center divide-y-2 divide-black">
                <li className="w-full text-center">
                  <a
                    href="#aboutme"
                    onClick={toggleMenu}
                    className="block py-4 hover:bg-gray-200 uppercase font-semibold"
                  >
                    about me
                  </a>
                </li>
                <li className="w-full text-center">
                  <a
                    href="#MyWork"
                    onClick={toggleMenu}
                    className="block py-4 hover:bg-gray-200 uppercase font-semibold"
                  >
                    my work
                  </a>
                </li>
                <li className="w-full text-center">
                  <a
                    href="#activity"
                    onClick={toggleMenu}
                    className="block py-4 hover:bg-gray-200 uppercase font-semibold"
                  >
                    Activities
                  </a>
                </li>
                <li className="w-full text-center">
                  <a
                    href="#contact"
                    onClick={toggleMenu}
                    className="block py-4 hover:bg-gray-200 uppercase font-semibold"
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;