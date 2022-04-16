import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import placeholder from "../../assets/banner2.jpg";

const Hero = ({ title = "The Wheel of Time", score = 10 }) => {
  const getBorderColor = () => {
    if (score >= 7) {
      return "border-green-400";
    } else if (score > 4 && score < 7) {
      return "border-yellow-400";
    } else {
      return "border-red-400";
    }
  };

  return (
    <header className="relative min-h-screen">
      <img
        className="object-fill w-full h-full"
        src={placeholder}
        alt="Filme em destaque"
      />
      <article className="absolute top-96 mb-64 px-40">
        <p className="text-3xl">Watch now:</p>
        <h2 className="text-6xl font-bold">{title}</h2>
        <p className="text-2xl my-8">
          Score{" "}
          <span
            className={`inline-block mx-2 py-2 px-3 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}
          >
            {score}
          </span>
        </p>

        <button className="text-2xl py-3 px-8 mr-3 rounded bg-black bg-opacity-50 transition-all duration-500 ease-in-out hover:bg-amber-400 hover:bg-opacity-75  hover:text-black">
          <FontAwesomeIcon className="text-2xl mr-2" icon={faPlay} /> Watch
        </button>
        <button className="text-2xl py-3 px-8 rounded bg-black bg-opacity-50 transition-all duration-500 ease-in-out hover:bg-amber-400 hover:bg-opacity-75 hover:text-black">
          <FontAwesomeIcon className="text-2xl mr-2" icon={faPlus} /> Watchlist
        </button>
      </article>
    </header>
  );
};

export default Hero;
