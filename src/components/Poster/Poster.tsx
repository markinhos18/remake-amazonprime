import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import Score from "../Score/Score";
import { Movie } from "../../data/mock";

import "./Poster.scss";

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="rounded-md relative transition-all duration-500 ease-in-out transform  hover:scale-110 cursor-pointer"
    key={index}
  >
    <img src={cover} alt={title} />
    <div className="poster absolute inset-0 w-full h-full py-8 px-4 grid place-items-center bg-black bg-opacity-40 transition-all duration-500 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faPlayCircle} size="4x" />
      <h2 className="text-2xl">{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
