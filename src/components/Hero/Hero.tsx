import React from "react";
import placeholder from "../../assets/banner.jpg";

const Hero = () => (
  <header className="min-h-full">
    <img
      className="object-fill w-full h-full"
      src={placeholder}
      alt="Filme em destaque"
    />
  </header>
);

export default Hero;
