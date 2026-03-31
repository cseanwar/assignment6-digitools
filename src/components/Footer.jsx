import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto pt-30 pb-20 px-2">
        <div className="flex flex-wrap md:flex-nowrap gap-12 justify-center items-start">
          <div className="flex flex-col gap-4 w-87.5">
            <h1 className="font-extrabold text-[40px] text-[#FFFFFF]">
              DigiTools
            </h1>
            <p className="text-base text-[#FFFFFF80]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-30">
            <h4 className="font-xl text-[#FFFFFF]">Product</h4>
            <ul className="flex flex-col gap-3 text-base text-[#FFFFFF80]">
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Templates</a>
              </li>
              <li>
                <a>Integrations</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-40">
            <h4 className="font-xl text-[#FFFFFF]">Company</h4>
            <ul className="flex flex-col gap-3 text-base text-[#FFFFFF80]">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Press</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-40">
            <h4 className="font-xl text-[#FFFFFF]">Resources</h4>
            <ul className="flex flex-col gap-3 text-base text-[#FFFFFF80]">
              <li>
                <a>Documentation</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-55">
            <h1 className="font-xl text-[#FFFFFF]">Social Links</h1>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex justify-center items-center">
                <img src="/Instagram.png" alt="" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex justify-center items-center">
                <img src="/Facebook.png" alt="" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex justify-center items-center">
                <img src="/twitter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-7.5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base text-[#FAFAFA50]">
          <p>&copy; 2023 DigiTools. All rights reserved.</p>
          <div className="flex gap-4">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
