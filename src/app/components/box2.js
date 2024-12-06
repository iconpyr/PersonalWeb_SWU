import Link from "next/link";
import React from "react";

const Box2 = (props) => (
  <Link href={props.link} target="_blank">
    <div
      className="flex flex-col text-midnightMocha midnight-border rounded-lg bg-offWhite
     divide-y-2 divide-black overflow-hidden *:uppercase hover:bg-yellow-50 duration-300"
    >
      <div className="p-3 flex flex-col gap-3 h-full">
        <div
          className="relative flex-shrink-0 aspect-16/9 h-60 bg-cover bg-center
            rounded-md midnight-border overflow-hidden"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="flex flex-col gap-2">
          <h5 className="line-clamp-2 uppercase font-bold">{props.name}</h5>
          <span className="uppercase font-mono max-sm:mb-auto textxs">
            {props.discription}
          </span>
        </div>
      </div>
      {/* program use */}
      <div className="relative flex items-center justify-between py-4 mt-auto">
        <div className="flex items-center gap-2 px-3 text-[10px] *:font-medium">
          {/* <span className="midnight-border px-2 py-1 rounded-md w-fit duration-150 hover:bg-orange-100 ">Next.JS</span>
                <span className="midnight-border px-2 py-1 rounded-md w-fit duration-150 hover:bg-orange-100 ">Ollama3.2</span>
                <span className="midnight-border px-2 py-1 rounded-md w-fit duration-150 hover:bg-orange-100 ">Next.JS</span> */}
          {props.programUse.map((program, index) => (
            <span
              key={index}
              className="midnight-border px-2 py-1 rounded-md w-fit duration-150 hover:bg-orange-100"
            >
              {program}
            </span>
          ))}
          {/* <div className="group duration-150 relative flex items-center">
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
        </div> */}
        </div>
      </div>
    </div>
  </Link>
);

export default Box2;
