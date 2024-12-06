import React from "react";

const Box = ({ image, name, discription }) => (
    <div
      className="hover:bg-pink-100 duration-300 uppercase flex flex-col border-black rounded-lg bg-white 
    divide-y-2 divide-black overflow-hidden text-black h-96 w-96 border-2"
    >
      <div className="flex flex-col justify-center gap-1.5 p-3 ">
        <span className="text-xl 3xl:text-3xl">{name}</span>
        <span className="text-sm font-bold 3xl:text-base">{discription}</span>
      </div>
  
      <div className="p-3 h-full flex flex-col">
        <div
          className="aspect-16/9 realtive w-full h-full rounded-md overflow-hidden bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <span className="">hi</span>
      </div>
  
      <div className="group hover:bg-pink-200 duration-150 relative flex items-center justify-between gap-2 px-3 py-1.5">
        <span className="text-lg font-medium tracking-wider"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37.708"
          height="38.135"
          class="group-hover:-rotate-45 duration-300"
          aria-label="Arrow right"
        >
          <g stroke-width="2" data-name="Group 7560">
            <path
              fill="#100f0d"
              stroke="#100f0d"
              d="m36.686 19.068-1.56 7.382-4.409 6.106-6.5 3.774-7.457.787-7.134-2.331-5.575-5.05L1 22.841v-7.547L4.051 8.4l5.575-5.05 7.134-2.333 7.46.789 6.5 3.774 4.41 6.106 1.56 7.382Z"
              data-name="Path 40"
            ></path>
            <g fill="none" stroke="#f7f7f2">
              <path d="M9.37 19.063h16.255" data-name="Path 34"></path>
              <path
                d="M20.953 12.858c-.138 2.068.91 6.205 6.205 6.205"
                data-name="Path 35"
              ></path>
              <path
                d="M20.953 25.268c-.137-2.068.911-6.205 6.206-6.205"
                data-name="Path 36"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );

export default Box;