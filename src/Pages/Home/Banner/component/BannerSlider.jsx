import React from "react";
import ban1 from "../../../../assets/Image/banner/banner-1.jpg";
import ban2 from "../../../../assets/Image/banner/banner-2.jpg";
import ban3 from "../../../../assets/Image/banner/banner-3.jpg";
import ban4 from "../../../../assets/Image/banner/banner-4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const images = [
    {
      pic: ban1,
      title: "Latest trending food items",
    },
    {
      pic: ban2,
      title: "Latest trending beauty items",
    },
    {
      pic: ban3,
      title: "Latest trending Electronics items",
    },
    {
      pic: ban4,
      title: "Latest trending watch items",
    },
  ];

  return (
    <div className="w-[80%]">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <div className="relative">
              <img src={img.pic} alt={img.title} className="w-full h-[420px]" />
              <div className="absolute top-20 left-24 bg-opacity-50 text-black  p-2 text-5xl max-w-[450px] font-bold leading-[50px]">
                {img.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
