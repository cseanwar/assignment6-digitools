import React from "react";
import heroImg from "../assets/Banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 md:flex-row md:gap-15 justify-center items-center py-21.25">
      <div className="space-y-4 px-2">
        <div className="badge bg-[#E1E7FF] py-4 px-4 rounded-full">
          <img src="/ai-powered.png" alt="" />
          <span className="font-medium bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </div>
        <h1 className="font-extrabold text-7xl leading-21">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p className="text-lg text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex gap-4">
          <a className="btn rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-base font-semibold text-[#FFFFFF]">
            Explore Products
          </a>
          <div className="p-0.5 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            <button className="flex items-center gap-2 bg-[#FFFFFF] text-base font-bold px-4 py-2 rounded-4xl cursor-pointer">
              <span className="flex items-center justify-center">
                <img src="/Play.png" alt="" />
              </span>
              <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-base bg-clip-text text-transparent">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className="content-center px-2" src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Banner;
