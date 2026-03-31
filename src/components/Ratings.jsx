import React from "react";

const Ratings = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-15">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3 px-30">
          <h1 className="font-extrabold text-6xl text-[#FFFFFF]">50K+</h1>
          <p className="text-[#FFFFFF80] text-2xl font-medium">Active Users</p>
        </div>

        <div className="w-0.5 h-15 bg-purple-300/40"></div>

        <div className="flex flex-col justify-center items-center gap-3 px-30">
          <h1 className="font-extrabold text-6xl text-[#FFFFFF]">200+</h1>
          <p className="text-[#FFFFFF80] text-2xl font-medium">Premium Tools</p>
        </div>

        <div className="w-0.5 h-15 bg-purple-300/40"></div>

        <div className="flex flex-col justify-center items-center gap-3 px-30">
          <h1 className="font-extrabold text-6xl text-[#FFFFFF]">4.9</h1>
          <p className="text-[#FFFFFF80] text-2xl font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
