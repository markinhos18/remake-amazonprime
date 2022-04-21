import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import placeholder1 from "../../assets/banner1.jpg";
import placeholder2 from "../../assets/banner2.jpg";
import placeholder3 from "../../assets/banner3.jpg";
import Slider from "react-slick";

import "./Hero.scss";

const Hero = () => {
  const settings = {
    className: "banner",
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrowOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <header className="box-border relative  -mb-32">
      <Slider {...settings}>
        <div>
          <img
            className="object-fill w-full h-full"
            src={placeholder2}
            alt="Filme em destaque"
          />
          <div className="absolute left-0 bottom-0 w-full h-80  bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div>
          <img
            className="object-fill w-full h-full"
            src={placeholder1}
            alt="Filme em destaque"
          />
          <div className="absolute left-0 bottom-0 w-full   bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div>
          <img
            className="object-fill w-full h-full"
            src={placeholder3}
            alt="Filme em destaque"
          />
          <div className="absolute left-0 bottom-0 w-full   bg-gradient-to-b from-transparent to-black"></div>
        </div>
      </Slider>
    </header>
  );
};

export default Hero;
