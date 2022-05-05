import React, { useEffect, useState } from "react";

import CONST from "./data/constants";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const data = await response.json();

      console.log(data);
      setMovies(data);
    };

    fetchData();
  }, []);

  // useEffect(() => movies && console.log(movies), [movies]);

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero
        image1={...movies?.results[0].backdrop_path}
        image2={...movies?.results[1].backdrop_path}
      />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
