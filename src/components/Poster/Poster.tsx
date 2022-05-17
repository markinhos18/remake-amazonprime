import React from "react";
import emitter from "../../utils/eventEmitter";

import CONST from "../../data/constants";
import { TitleProps, TitleType } from "../../App";
import logo from "../../assets/title-amazon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// import Score from "../Score/Score";
import { Movie } from "../../data/mock";

import "./Poster.scss";

const Poster = (
  {
    cover,
    backdrop_path,
    original_title,
    name,
    vote_average,
    overview,
    release_date,
    id,
  }: Movie,
  index: number
) => {
  const { IMAGEURL } = CONST;

  const handleClick = () => {
    const type = original_title ? TitleType.Movie : TitleType.Serie; // TODO: IMPROVE

    emitter.emit(CONST.EVENTS.PosterClick, { type, id });
  };

  return (
    <div className="poster  ">
      <article
        className=" rounded transition-all duration-500 ease-in-out transform  hover:scale-110  cursor-pointer "
        key={index}
        onClick={handleClick}
      >
        <span className="absolute -left-0 -top-0  bg-sky-700 text-black rounded-r-lg pe-1 border-solid border-2 border-black px-1 text-1xl font-bold z-50">
          prime
        </span>

        <div className="absolute  top-3   w-full">
          <img
            src={logo}
            className="w-40 left-0 right-0 m-auto"
            alt="Amazon Prime"
          />
        </div>
        <img
          className="w-80 h-48  object-cover object-center"
          src={backdrop_path ? `${IMAGEURL}/original${backdrop_path}` : cover}
          alt={original_title ? original_title : name}
        />

        <div className="absolute top-0 opacity-0 hover:opacity-100    z-50 w-80  ">
          <div className="box rounded  border-2 border-black hover:border-solid hover:border-2 hover:border-sky-400  transition-all duration-500 ease-in-out transform">
            <div className="h-44"></div>
            <div className="card px-5 pb-5">
              <FontAwesomeIcon icon={faPlayCircle} size="2x" />
              <b>Reproduzir</b>
              <h3 className="blue-title py-2">
                <b>Incluído no Prime</b>
              </h3>
              <h2 className="text-1xl pb-1">
                <b>{original_title ? original_title : name}</b>
              </h2>
              <p className="descr">{overview}</p>
              {/* <Score value={vote_average} /> */}
              <div className="flex">{release_date}</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Poster;
