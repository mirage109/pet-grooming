import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper.css";
import { Navigation, Pagination, Autoplay } from "swiper";
import { heroSlider } from "../data";

const HeroSlider = () => {
  return (
    <Swiper>
      {heroSlider.map((slide, index) => {
        const { image, title, subtitle, buttonText } = slide;
        return (
          <SwiperSlide className="py-12 lg:py-18" key={index}>
            <div className="container mx-auto text-center lg:text-left">
              <div className="flex flex-col justify-between items-center">
                <div>
                  <h1>{title}</h1>
                  <p>{subtitle}</p>
                  <button>{buttonText}</button>
                </div>
                <div>
                  <img src={image.type} alt={title} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
