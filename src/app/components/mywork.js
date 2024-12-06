import React from "react";
import Box2 from "./box2";

const MyWork = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('/images/sopbg.jpg')] h-auto pb-12 font-sans">
      <div
        className="text-black text-7xl justify-center items-center pt-10 pb-6 flex font-bold"
        id="MyWork"
      >
        MY WORK
      </div>
      <div className="container mx-auto px-8 md:px-2 lg:px-2 xl:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-wrap">
          <Box2
            link="https://drunk-business.surge.sh/"
            image="/images/mac2.png"
            name="JOBS' CHAT"
            discription="An Ai chatbot that answer as Steve Jobs"
            programUse={["react", "tailwind css", "openai"]}
          />
          <Box2
            link="https://youtu.be/wNw6cD1qMa0"
            image="/images/unity2.png"
            name="unity game"
            discription="unity openworld map"
            programUse={["unity", "blender"]}
          />
          <Box2
            link="https://github.com/iconpyr/Smile_SWU.git"
            image="/images/smilemockup.png"
            name="smile"
            discription="application that detect smiling face and will give you reward!"
            programUse={["swift", "swiftui"]}
          />
          <Box2
            link="https://useful-owner.surge.sh/"
            image="/images/ramen2.png"
            name="Slash ramen"
            discription="ramen ticket machine for cafeslash"
            programUse={["react", "tailwind css"]}
          />
        </div>
      </div>
    </section>
  );
};

export default MyWork;
