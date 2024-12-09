import React from "react";

const Activities = () => {
  return (
    <section className="h-full py-20 md:px-20 px-7 mx-auto bg-black bg-[url('/images/abmebg1.jpg')] bg-cover bg-center font-proxima-nova" id="activity">
      <div className="max-w-7xl mx-auto">
        <div className="text-black md:text-8xl justify-center items-center pt-10 pb-6 flex font-bold uppercase mb-8 text-5xl">
          activities
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 items-center text-black gap-4">
          <div className="bg-white/5 backdrop-blur-xl shadow-xl rounded-xl border-2 border-white/5 h-full">
            <img
              src="/images/42bkk.png"
              alt=""
              width={256}
              className="pl-8 pt-8"
            />
            <div className="text-wrap text-xl p-8 ">
              ผมได้เข้าร่วมค่าย 42 Bangkok Discovery Piscine
              ที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
              ซึ่งเป็นค่ายเขียนภาษา Python ที่ต้องศึกษาด้วยตัวเอง
              ผมได้เรียนรู้การเขียนโปรแกรมผ่านการทำโจทย์ต่าง ๆ
              มากไปกว่านั้นคือการได้แข่งขันและผลักดันตัวเองให้ไปถึงเลเวลที่สูงขึ้น
              ผมมีโอกาสเป็นหัวหน้าทีม Mini-Project
              ที่ต้องทำระบบตรวจสอบในเกมหมากรุก ว่าตัว King
              โดนศัตรูโจมตีอยู่หรือไม่
              และทีมของผมได้รับรางวัลรองชนะเลิศอันดับที่ 1
              ซึ่งได้รับรางวัลเป็นเสื้อของ Discovery piscine
            </div>
          </div>
          <div className="h-[512px] bg-red-300 bg-[url('/images/me2piscine.jpg')] bg-cover bg-center rounded-xl"></div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="md:h-80 h-40 bg-red-300 rounded-xl bg-[url('/images/mepiscine.jpg')] bg-cover bg-center"></div>
          <div className="md:h-80 h-40 bg-red-300 rounded-xl bg-[url('/images/shirtpiscine.jpg')] bg-cover bg-center"></div>
          <div className="md:h-80 h-40 bg-red-300 rounded-xl bg-[url('/images/workingpiscine.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 items-center text-black pt-8 gap-4">
          <div className="h-96 bg-red-300 bg-[url('/images/drum3.jpg')] bg-cover bg-center rounded-xl"></div>
          <div className="h-full bg-white/5 backdrop-blur-xl shadow-xl rounded-xl border-2 border-white/5 py-4 ">
            <div className="pl-8 text-4xl text-black font-bold uppercase pb-5 ">
              Drumming
            </div>
            <div className="text-wrap text-xl px-8 ml-4">
              เนื่องจากกิจกรรมที่ผมชอบทำในยามว่างคือการเล่นดนตรี
              ผมจึงอยากมีส่วนร่วมและแสดงฝีมือในการตีกลองของผมกับโรงเรียน
              ผมได้เข้าร่วมเป็นมือกลองของสีในงาน นิลุบลเกม
              และได้เป็นมือกลองของวงดนตรีที่ตั้งขึ้นมากับเพื่อน ๆ
              เพื่อแสดงในงานดนตรีใต้ตึกของโรงเรียน
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="h-80 bg-red-300 rounded-xl bg-[url('/images/drum0.jpg')] bg-cover bg-center"></div>
          <div className="h-80 bg-red-300 rounded-xl bg-[url('/images/drum1.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 items-start text-black pt-8 gap-4">
          <div className="h-full bg-white/5 backdrop-blur-xl shadow-xl rounded-xl border-2 border-white/5 py-8 ">
            <div className="pl-8 text-4xl text-black font-bold uppercase pb-5 ">
              drip coffee
            </div>
            <div className="text-wrap text-2xl px-8 ml-4">
              เนื่องจากธุรกิจที่บ้านของ คุณแม่เปิดร้าน CafeSlash
              ผมได้มีโอกาสมาช่วยคุณแม่ โดยการมาฝึกงานเป็น บาริสต้า
              จึงกลายมาเป็นความชอบอีกอย่างหนึ่งครับ
            </div>
          </div>
          <div className="h-[512px] bg-red-300 bg-[url('/images/drip.jpg')] bg-cover bg-center rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
