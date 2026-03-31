import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="container mx-auto py-30">
        <div className="flex flex-col gap-2 text-center mb-10">
          <h1 className="font-extrabold text-5xl text-[#101727]">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382] text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-7.5 justify-center items-center">
            <div className="bg-[#f9fafc] border border-[#F2F2F2] rounded-2xl p-6 flex flex-col gap-6 h-120 w-95 hover:-translate-y-3 transition-all duration-300 relative">
                <div>
                    <h3 className="font-bold text-2xl text-[#101727]">Starter</h3>
                    <p className="text-[#627382] text-base mt-0.5">Perfect for getting started</p>
                </div>
                <div className="flex items-end">
                    <span className="font-bold text-[40px] text-[#101727]">$0</span>
                    <span className="text-[#627382] text-xl">/Month</span>
                </div>
                <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Access to 10 free tools</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Basic templates</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Community support</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>1 project per month</span></li>
                </ul>
                
                <button className="btn w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[#FFFFFF] mt-auto text-base font-bold">Get Started Free</button>
            </div>
            <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] border border-[#F2F2F2] rounded-2xl p-6 flex flex-col gap-6 h-120 w-95 hover:-translate-y-3 transition-all duration-300 relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FEf3C6] text-[#BB4D00] text-sm px-4 py-1.5 rounded-full">
                    Most Popular
                </div>
                <div>
                    <h3 className="font-bold text-2xl text-[#FFFFFF]">Pro</h3>
                    <p className="text-[#FFFFFF80] text-base mt-0.5">Perfect for getting started</p>
                </div>
                <div className="flex items-end text-[#FFFFFF]">
                    <span className="font-bold text-[40px]">$29</span>
                    <span className="text-xl">/Month</span>
                </div>
                <ul className="flex flex-col gap-2 text-[#FFFFFF]">
                    <li className="flex gap-2 items-center"><img src="/Check-white.png" alt="" /><span>Access to all premium tools</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check-white.png" alt="" /><span>Unlimited templates</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check-white.png" alt="" /><span>Priority support</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check-white.png" alt="" /><span>Unlimited projects</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check-white.png" alt="" /><span>Cloud sync</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check-white.png" alt="" /><span>Advanced analytics</span></li>
                </ul>
                
                <button className="btn w-full rounded-full mt-auto bg-white text-base font-bold"><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">Start Pro Trial</span></button>
            </div>
            <div className="bg-[#f9fafc] border border-[#F2F2F2] rounded-2xl p-6 flex flex-col gap-6 h-120 w-95 hover:-translate-y-3 transition-all duration-300 relative">
                <div>
                    <h3 className="font-bold text-2xl text-[#101727]">Enterprise</h3>
                    <p className="text-[#627382] text-base mt-0.5">For teams and businesses</p>
                </div>
                <div className="flex items-end">
                    <span className="font-bold text-[40px] text-[#101727]">$99</span>
                    <span className="text-[#627382] text-xl">/Month</span>
                </div>
                <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Everything in Pro</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Everything in Pro</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Team collaboration</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Custom integrations</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Dedicated support</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>SLA guarantee</span></li>
                    <li className="flex gap-2 items-center"><img src="/Check.png" alt="" /><span>Custom branding</span></li>
                </ul>
                
                <button className="btn w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[#FFFFFF] mt-auto text-base font-bold">Get Started Free</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
