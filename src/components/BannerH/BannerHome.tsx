import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import { Banner } from "../../data/banner";
import CONST from "../../data/constants";

// import "./Hero.scss";

const BannerHome = (
  { placeholder, backdrop_path }: Banner,
  index: number
  // backdrop_path = null
) => {
  const { IMAGEURL } = CONST;
  console.log(placeholder);
  return (
    <div key={index}>
      <img
        className="object-fill w-full h-full"
        src={
          backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder
        }
        alt="Filme em destaque"
      />
      <div className="absolute left-0 bottom-0 w-full h-80  bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default BannerHome;
