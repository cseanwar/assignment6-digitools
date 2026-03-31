import React from "react";

const StepsCards = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="container mx-auto py-30">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <h3 className="font-extrabold text-5xl text-[#101727]">
            Get Started in 3 Steps
          </h3>
          <p className="text-base text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-7.5 justify-center items-center">
          <div className="relative w-95 bg-[#FFFFFF] rounded-2xl px-8 py-22 shadow-sm border border-[#F1F1F1] hover:-translate-y-3 transition-all duration-300">
            <div className="absolute top-4 right-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center">
              01
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="w-25 h-25 rounded-full bg-purple-100 flex items-center justify-center">
                <img src="/user.png" alt="" />
              </div>
              <h4 className="font-bold text-[#101727] text-2xl">Create Account</h4>
              <p className="text-[#627382] text-base leading-5">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="relative w-95 bg-[#FFFFFF] rounded-2xl px-8 py-22 shadow-sm border border-gray-100 hover:-translate-y-3 transition-all duration-300">
            <div className="absolute top-4 right-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center">
              02
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="w-25 h-25 rounded-full bg-purple-100 flex items-center justify-center">
                <img src="/package.png" alt="" />
              </div>
              <h4 className="font-bold text-[#101727] text-2xl">Choose Products</h4>
              <p className="text-[#627382] text-base leading-5">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="relative w-95 bg-[#FFFFFF] rounded-2xl px-8 py-22 shadow-sm border border-gray-100 hover:-translate-y-3 transition-all duration-300">
            <div className="absolute top-4 right-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center">
              03
            </div>
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <div className="w-25 h-25 rounded-full bg-purple-100 flex items-center justify-center">
                <img src="/rocket.png" alt="" />
              </div>
              <h4 className="font-bold text-[#101727] text-2xl">Start Creating</h4>
              <p className="text-[#627382] text-base leading-5">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsCards;
