import { useEffect, useState } from "react";

//datas
import CONST from "./data/constants";
import { MovieProps } from "./data/movies";
import { SerieProps } from "./data/series";
import { GenreAction } from "./data/genreaction";
import { GenreHorror } from "./data/genrehorror";
import { GenreComedy } from "./data/genrecomedy";

//components
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.scss";

const App = () => {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState<MovieProps>({} as MovieProps);
  const [series, setSeries] = useState<SerieProps>({} as SerieProps);
  const [action, setGenreAction] = useState<GenreAction>({} as GenreAction);
  const [horror, setGenreHorror] = useState<GenreHorror>({} as GenreHorror);
  const [comedy, setGenreComedy] = useState<GenreComedy>({} as GenreComedy);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const moviesData = await movies.json();
      setMovies(moviesData);
      // console.log(moviesData);
      /******************************************************* */
      const series = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
      );
      const seriesData = await series.json();
      setSeries(seriesData);

      /********************************************************* */
      const action = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc&with_genres=10759`
      );
      const actionData = await action.json();
      setGenreAction(actionData);
      // console.log(actionData);

      /****************************************** */
      const horror = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc&with_genres=27`
      );
      const horrorData = await horror.json();
      setGenreHorror(horrorData);
      // console.log(horrorData);

      /***************************************************** */

      const comedy = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc&with_genres=35,18`
      );
      const comedyData = await comedy.json();
      setGenreComedy(comedyData);
      // console.log(horrorData);

      /***************************************************** */

      setLoading(false);
    };

    fetchData();
  }, []);

  // useEffect(() => movies && console.log(movies), [movies]);

  const getFeaturedMovie = () => movies && movies?.results;

  const getFeaturedSerie = () => series && series?.results;

  const getFeaturedAction = () => action && action?.results;

  const getFeaturedHorror = () => horror && horror?.results;

  const getFeaturedComedy = () => comedy && comedy?.results;

  // const getMovieList = () => {
  //   if (movies) {
  //     const [featured, ...movieList] = movies?.results;
  //     return movieList;
  //   }
  //   return [];
  // };

  return (
    <div className="m-auto antialised font-sans  text-white">
      {loading && <Loading />}
      {!loading && (
        <>
          <Hero results={getFeaturedMovie()} />
          <NavBar />
          <div className="relative z-50 ">
            <Carousel
              title="Movie shows we think you'll like"
              // data={getMovieList()}
              data={movies?.results}
            />
          </div>
          <div className="relative z-30 section__home1">
            <Carousel
              title="Series shows we think you'll like"
              data={getFeaturedSerie()}
            />
          </div>
          <div className="relative z-20 section__home2">
            <Carousel
              title="Action and adventure series"
              data={getFeaturedAction()}
            />
          </div>
          <div className="relative z-10 section__home3">
            <Carousel title="Horror movies" data={getFeaturedHorror()} />
          </div>
          <div className="relative z-0 section__home4">
            <Carousel
              title="Comedy and drama series"
              data={getFeaturedComedy()}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
