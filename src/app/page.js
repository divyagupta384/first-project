import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex space-y-8 items-center min-h-[80vh]">
        <div className="flex-1 pl-8">
          <span className="font-bold text-4xl pt-4 px-8 mt-4">
            Grow your company with
          </span>
          <br />
          <span className="text-sky-500 text-4xl px-8">TouchWood</span>
          <br />
          <span className="px-8 text-xl">
            We are the team of talented developers making websites.
          </span>
          <button className="border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-2xl ml-8 mt-4 ">
            Get Started
          </button>
        </div>
        <div className="flex-1  movementAnimation">
          <img
            src="/home.png"
            alt="Home"
            className="w-full h-[17rem] object-contain "
          />
        </div>
      </div>
      <Footer />
      <style>
        {`
          .movementAnimation{
            animation: displace 4s ease;
            animation-fill-mode:forward;
            animation-iteration-count:infinite;
            animation-delay:0.2s;
          }
            @keyframes displace {
          0% {
            translate: none;
          }
          50% {
            translate: 0px -40px;
            overflow: hidden;
           
          }
          100% {
            translate: none;
          
          }
        }

          `}
      </style>
    </div>
  );
};
export default Home;
