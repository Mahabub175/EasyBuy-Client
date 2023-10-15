import React from "react";
import BannerSlider from "./component/BannerSlider";
import avatar from "../../../assets/Image/banner/avatar.png";
const Banner = () => {
  return (
    <section className="container mx-auto mt-10">
      <div className="md:flex gap-4">
        <BannerSlider />
        <div className="w-full text-start">
          <div className="bg-[#95c1f3] relative p-4 rounded-md">
            <div className="flex gap-4">
              <img src={avatar} alt="" className="h-12 rounded-full" />
              <h2 className="font-semibold">
                Hi, User <br /> let`s get started
              </h2>
            </div>
            <div className="flex flex-col mt-4">
              <button className="bg-primary py-1 rounded-lg font-bold text-white mb-2 hover:bg-light hover:text-primary duration-300">
                Join Now
              </button>
              <button className="bg-light py-1 rounded-lg font-bold text-primary ">
                Log in
              </button>
            </div>
          </div>
          <div className="bg-tertiary p-4 rounded-md mt-3 text-xl text-white text-center md:text-start">
            Get US $10 off <br /> with a new <br /> supplier
          </div>
          <div className="bg-quaternary p-4 rounded-md mt-2 text-xl text-white text-center md:text-start">
            Send quotes with <br /> supplier <br /> preferences
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
