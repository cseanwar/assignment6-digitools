import React from "react";

const TransformSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-30 px-2">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h2 className="font-extrabold text-[40px] text-[#FFFFFF]">Ready to Transform Your Workflow?</h2>
        <p className="text-base text-[#FFFFFF90] leading-6">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />Start your free trial today.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="btn bg-white rounded-full"><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">Explore Products</span></button>
          <button className="btn rounded-full bg-transparent text-[#FFFFFF]">View Pricing</button>
        </div>
        <p className="text-base text-[#FFFFFF80] leading-5">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default TransformSection;
