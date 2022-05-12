import React from "react";

import Slick from "react-slick";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Carousel.scss";
import mockData, { Movie } from "../../data/mock";

import Poster from "../Poster/Poster";

interface CarouselData {
  title?: string;
  data?: Movie[];
}

const Carousel = ({ title = "Carousel", data = mockData }: CarouselData) => {
  const options = {
    infinite: false,
    // slidesToShow: 8,
    slidesToScroll: 1,

    // slidesToEnd: 1,
    variableWidth: true,

    // centerMode: true,
    arrows: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="carousel  pl-4">
      <h2 className=" text-2xl pl-1  pb-2 font-semibold">
        <span className="blue-title text-3xl">prime</span> {title}
      </h2>

      <Slick {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;
