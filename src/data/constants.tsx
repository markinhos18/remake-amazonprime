const URL = "https://api.themoviedb.org/3";
const IMAGEURL = "https://image.tmdb.org/t/p";

const APIKEY = "8ca9eb5941e46164c96d7de5e082add4";

const APISTRING = `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
  PosterClick: "PosterClick",
  ModalClose: "ModalClose",
  VideoClose: "VideoClose",
  VideoClick: "VideoClick",
};

export default { URL, IMAGEURL, APIKEY, APISTRING, EVENTS };
