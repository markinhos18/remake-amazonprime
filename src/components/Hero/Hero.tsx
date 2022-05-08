import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { MovieProps } from "../../data/movies";
import CONST from "../../data/constants";

// import { Banner } from "../../data/banner";

// import BannerHome from "../BannerH/BannerHome";

import placeholder from "../../assets/banner1.jpg";
// import image2 from "../../assets/banner2.jpg";
// import image3 from "../../assets/banner3.jpg";

import Slider from "react-slick";

import "./Hero.scss";

const Hero = ({ results }: MovieProps) => {
  const [image, setImage] = useState();

  const { IMAGEURL } = CONST;
  const backdrop_path = true;

  const settings = {
    className: "banner",
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
          dots: false,
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
        {results?.map((item) => (
          <img
            className="object-fill w-full h-full"
            src={
              backdrop_path
                ? `${IMAGEURL}/original/${item.backdrop_path}`
                : placeholder
            }
            alt="Filme em destaque"
          />
        ))}
        <div className="absolute left-0 bottom-0 w-full h-80  bg-gradient-to-b from-transparent to-black"></div>
      </Slider>
    </header>
  );
};

export default Hero;
