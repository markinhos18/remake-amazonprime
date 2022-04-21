import React from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="m-auto antialised font-sans  bg-black text-white">
      <Hero />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
