import React from "react";

const Navbar = () => {
    return (
      <>
        <header className="fixed left-0 top-0 bg-white z-[9999999999] w-full border-b-2 border-b-black h-16 md:h-20">
          <div className="z-20 w-full h-full flex items-center divide-x-2 divide-black text-black">
            <a
              href=""
              className="px-5 lg:px-8 h-full flex items-center 
          justify-center max-xl:mr-auto duration-150 hover:bg-gray-400"
            >
              <div className="items-center justify-center w-auto font-bold text-2xl">
                ICONPYR
              </div>
            </a>
            <ul
              className="z-10 items-center justify-end 3xl:justify-start 
          hidden xl:flex h-full w-full gap-36 3xl:gap-12 px-10"
            >
              <li className="">
                <a
                  href=""
                  className=" relative overflow-hidden cursor-pointer flex 
              items-center justify-center gap-1 
              hover:bg-black hover:text-white px-2 
              py-1 rounded-lg uppercase text-sm 
              2xl:text-base 3xl:text-xl font-semibold 
              duration-300 w-full"
                >
                  about me
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className=" relative overflow-hidden cursor-pointer flex 
              items-center justify-center gap-1 
              hover:bg-black hover:text-white px-2 
              py-1 rounded-lg uppercase text-sm 
              2xl:text-base 3xl:text-xl font-semibold 
              duration-300 w-full"
                >
                  my work
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className=" relative overflow-hidden cursor-pointer flex 
              items-center justify-center gap-1 
              hover:bg-black hover:text-white px-2 
              py-1 rounded-lg uppercase text-sm 
              2xl:text-base 3xl:text-xl font-semibold 
              duration-300 w-full"
                >
                  dream
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className=" relative overflow-hidden cursor-pointer flex 
              items-center justify-center gap-1 
              hover:bg-black hover:text-white px-2 
              py-1 rounded-lg uppercase text-sm 
              2xl:text-base 3xl:text-xl font-semibold 
              duration-300 w-full"
                >
                  contact
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className=" relative overflow-hidden cursor-pointer flex 
              items-center justify-center gap-1 
              hover:bg-black hover:text-white px-2 
              py-1 rounded-lg uppercase text-sm 
              2xl:text-base 3xl:text-xl font-semibold 
              duration-300 w-full"
                >
                  donate
                </a>
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  };

export default Navbar;