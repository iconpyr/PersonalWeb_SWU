import React from "react";
import Navbar from "./components/nav";
import MyWork from "./components/mywork";
import Activities from "./components/activity";
import Footer from "./components/footer";
import SmoothScroll from "./components/smoothscroll";

export default function Page() {
  return (
    <div className="font-mono">
      <Navbar />
      <Banner />
      <AboutMe />
      <MyWork />
      <Activities />
      <Footer />
    </div>
  );
}

const Banner = () => {
  return (
    <section className="grid grid-cols-1 relative max-md:!pt-5 bg-[url('/images/me_1.jpg')] h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="absolute w-full h-full">
        <div className="flex items-end h-full animate-scroll pb-10">
          <ul className="flex whitespace-nowrap text-6xl text-black uppercase mx-7 sm:text-7xl xl:text-9xl">
            <li className="mr-14">Piyorod Pasaganon - portfolio</li>
            <li className="mr-14">Piyorod Pasaganon - portfolio</li>
            <li className="mr-14">Piyorod Pasaganon - portfolio</li>
            <li className="mr-14">Piyorod Pasaganon - portfolio</li>
            <li className="mr-14">Piyorod Pasaganon - portfolio</li>
            <li className="mr-14">Piyorod Pasaganon - portfolio</li>
            {/* Repeat as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <div id="aboutme">
      <section className="h-screen py-12 px-6 md:py-20 md:px-20 mx-auto bg-black bg-[url('/images/abmebg1.jpg')] bg-cover bg-center">
        {/* <div className="text-4xl flex justify-center items-center pt-4 ">
        ABOUT ME
        </div> */}
        <div className="h-full grid grid-cols-1 md:grid-cols-2 py-12 bg-white/5 backdrop-blur-xl shadow-xl rounded-xl border-2 border-white/5 overflow-hidden">
          <div className="py-7 md:py-24 pl-8 md:pl-14 pr-8 md:pr-8 text-black ">
            <div className="text-lg md:text-2xl uppercase">About Me</div>
            <div className="text-4xl md:text-7xl font-bold text-wrap">
              PIYOROD PASAGANON
            </div>
            <div className="md:text-2xl font-bold text-xl pt-4">Hello!</div>
            <div className="text-md md:text-xl text-wrap">
              I&apos;m Icon from Bodindecha Sing Singhaseni school. This is my
              first ever personal website.
            </div>
            <div className="text-md md:text-xl text-wrap pt-4 pb-12">
              I&apos;m passionate about design and programming, always eager to
              explore creative ways to bring ideas to life through technology.
              Whether it&apos;s crafting visually stunning designs or writing clean,
              functional code, I&apos;m driven by a love for innovation and
              self-expression.
            </div>
          </div>

          {/* <div className="h-[256px] md:h-auto bg-[url('/images/iconport2.png')] bg-cover bg-center border-2 border-red-500"> */}
          <div className="h-[720px] w-auto aspect-1/1  flex justify-center object-scale-down">
            <img
              src="/images/iconport2.png"
              style={{ height: "100%" }}
              alt=""
            />
          </div>

          {/* </div> */}
        </div>
      </section>
    </div>
  );
};
