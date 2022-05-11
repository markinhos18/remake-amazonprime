import { useEffect, useState } from "react";

//datas
import CONST from "./data/constants";
import { MovieProps } from "./data/movies";

//components
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.scss";

const App = () => {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState<MovieProps>({} as MovieProps);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const data = await response.json();
      setMovies(data);
      console.log(data);
    };

    fetchData();
  }, []);

  // useEffect(() => movies && console.log(movies), [movies]);

  const getFeaturedMovie = () => movies && movies?.results;

  // const getMovieList = () => {
  //   if (movies) {
  //     const [featured, ...movieList] = movies?.results;
  //     return movieList;
  //   }
  //   return [];
  // };

  return (
    <div className="m-auto antialised font-sans  text-white">
      <Hero results={getFeaturedMovie()} />
      <NavBar />
      <div className="relative z-50 ">
        <Carousel data={movies?.results} />
      </div>
      <div className="relative z-30 section__home1">
        <Carousel />
      </div>
      <div className="relative z-20 section__home2">
        <Carousel />
      </div>
      <div className="relative z-10 section__home3">
        <Carousel />
      </div>
      <div className="relative z-0 section__home4">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
