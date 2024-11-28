import React from "react";
import Box from "./components/box";
import Navbar from "./components/nav";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <MyWork />
      
    </div>
  );
}

const Banner = () => {
  return (
    <section className="mt-20 relative max-md:!pt-5 bg-[url('/images/trump.jpg')] h-screen bg-cover">
      <div className="text-8xl text-white justify-start items-center mx-7 mt-5 uppercase w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          piyorod pasaganon - bodindecha sing singhaseni
        </ul>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="max-w-6xl mx-auto">
      {/* <div className="text-4xl flex justify-center items-center pt-4 ">
        ABOUT ME
      </div> */}
      <div className=" grid grid-cols-1 md:grid-cols-2 border-2 border-red-500">
        <div className="py-14 md:py-24 pl-8 md:pl-14 pr-2 md:pr-8 border-2 border-red-500">
          <div className="text-xl md:text-2xl">About Me</div>
          <div className="text-5xl md:text-7xl font-bold">Lorem ipsum dolor</div>
          <div className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla provident eum laboriosam nam suscipit praesentium, aliquam numquam at nobis voluptate vitae nisi autem.</div>
        </div>
        <div className="h-[256px] md:h-auto bg-[url('/images/trump.jpg')] bg-cover bg-center border-2 border-blue-500">
          
          
        </div>
      </div>
    </section>
  );
};

const MyWork = () => {
  return (
    <section className="h-screen bg-slate-600">
        <div className="text-white text-4xl flex justify-center items-center pt-10">
          MY WORK
        </div>
        <div className="container  mx-10">
          <div className="flex flex-col md:flex-col-reverse xl:grid xl:grid-cols-4 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 max-md:order-2">
              <Box
                image="/images/mac_bg.jpg"
                name="JOBS' CHAT"
                discription="AI STEVE JOBS"
              />
              <Box
                image="/images/mac_bg.jpg"
                name="Slash ramen"
                discription="ramen ticket machine"
              />
            </div>
          </div>
        </div>
      </section>
  );
};
