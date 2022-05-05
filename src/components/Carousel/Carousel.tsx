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

const Carousel = ({
  //   title = "prime TV shows we think you'll like",
  data = mockData,
}: CarouselData) => {
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
    <section className="carousel mb-5">
      <h2 className="relative text-2xl pl-2  ">
        <span className="blue-title ">prime</span> TV shows we think you'll like
      </h2>

      <Slick {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;
