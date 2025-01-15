import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const covid19 = () => {
  return (
    <div>
      <Header />
      <div className="flex space-y-8 items-center min-h-[95vh]">
        <div className="flex-1 pl-8">
          <span className="font-bold text-2xl pt-2 px-8 ml-[540px]">LIVE</span>{" "}
          <br />
          <span className="font-bold text-2xl pt-2 px-8 ml-[390px]">
            COVID-19 CORONAVIRUS TRACKER
          </span>
          <div className="grid grid-cols-3 gap-2 mt-4 ml-[190px] mr-[190px]">
            <button className="bg-purple-500 text-white text-xl py-2 px-6 rounded-lg w-[260px] h-[160px]">
              Current Country India
            </button>

            <button className="bg-sky-500 text-white text-xl py-2 px-6 rounded-lg w-[260px] h-[160px]">
              Total confirmed
            </button>

            <button className="bg-green-500 text-white  text-xl py-2 px-6 rounded-lg  w-[260px] h-[160px]">
              Total Active
            </button>

            <button className="bg-yellow-400 text-white  text-xlpy-2 px-6 rounded-lg w-[260px]  h-[160px]">
              Total Recovered
            </button>

            <button className="bg-purple-500 text-white  text-xl py-2 px-6 rounded-lg  w-[260px] h-[160px]">
              Total Death
            </button>

            <button className="bg-pink-400 text-white text-xl py-2 px-6 rounded-lg w-[260px]  h-[160px]">
              Total Update
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default covid19;
