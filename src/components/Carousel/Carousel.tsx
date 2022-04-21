import React from "react";

import Slick from "react-slick";

import mockData, { Movie } from "../../data/mock";

import "./Carousel.scss";

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article key={index}>
    <img className=" px-2" src={cover} alt={title} />
  </article>
);

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
    <section className="mb-5">
      <h2 className="relative text-2xl pl-2 pb-5 ">
        <span className="blue-title ">prime</span> TV shows we think you'll like
      </h2>

      <Slick {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;
