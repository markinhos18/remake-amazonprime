import React from "react";

import CONST from "../../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import Score from "../Score/Score";
import { Movie } from "../../data/mock";

import "./Poster.scss";

const Poster = (
  { cover, poster_path, original_title, vote_average }: Movie,
  index: number
) => {
  const { IMAGEURL } = CONST;

  return (
    <article
      className="rounded-md relative transition-all duration-500 ease-in-out transform  hover:scale-110 cursor-pointer"
      key={index}
    >
      <img
        className="w-80 h-48  object-cover object-center"
        src={poster_path ? `${IMAGEURL}/w200${poster_path}` : cover}
        alt={original_title}
      />
      <div className="poster absolute inset-0 w-full h-full py-8 px-4 grid place-items-center bg-black bg-opacity-40 transition-all duration-500 ease-in-out opacity-0">
        <FontAwesomeIcon icon={faPlayCircle} size="4x" />
        <h2 className="text-2xl">{original_title}</h2>
        <Score value={vote_average} />
      </div>
    </article>
  );
};

export default Poster;
