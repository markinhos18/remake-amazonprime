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

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero results={movies.results} />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;
