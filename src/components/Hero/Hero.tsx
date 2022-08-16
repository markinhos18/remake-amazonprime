
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { MovieProps } from "../../data/movies";
import CONST from "../../data/constants";

// import { Banner } from "../../data/banner";

// import BannerHome from "../BannerH/BannerHome";

import placeholder from "../../assets/banner1.jpg";
import logo from "../../assets/logo-amazon-white.png";

import Slider from "react-slick";

import "./Hero.scss";

const Hero = ({ results }: MovieProps) => {
  // const [image, setImage] = useState();

  const { IMAGEURL } = CONST;
  const backdrop_path = true;
  const original_title = true;
  // const countBanner = 6;

  const settings = {
    className: "banner",
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrowOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <header className="box-border relative  top-10 lg:top-0 h-96 lg:h-full -mb-32">
      <Slider {...settings}>
        {results?.map((item) => (
          <div key={item.id}>
            <img
              className="object-fill w-full h-full"
              src={
                backdrop_path
                  ? `${IMAGEURL}/original${item.backdrop_path}`
                  : placeholder
              }
              alt="Filme em destaque"
            />

            <article className="title-banner absolute top-20 lg:top-80 mb-64 container-fluid pl-9">
              <h2 className="text-2xl lg:text-6xl font-bold">{`${item.original_title}`}</h2>
              <img
                src={logo}
                className="w-55 opacity-0 lg:opacity-100 mt-5 align-center"
                alt="Amazon Prime"
              />
            </article>
          </div>
        ))}

        <div className="absolute top-10 lg:top-auto left-0 bottom-0 w-full h-80  bg-gradient-to-b from-transparent to-gray-900"></div>
      </Slider>
    </header>
  );
};

export default Hero;
