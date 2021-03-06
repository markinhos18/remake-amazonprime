const URL = "https://api.themoviedb.org/3";
const IMAGEURL = "https://image.tmdb.org/t/p";

const APIKEY = "8ca9eb5941e46164c96d7de5e082add4";

const APISTRING = `?api_key=${APIKEY}&language=en-US`;
const EVENTS = {
  PosterClick: "PosterClick",
  VideoClick: "VideoClick",
  ModalClose: "ModalClose",
  VideoClose: "VideoClose",
};

export default {
  URL,
  IMAGEURL,
  APIKEY,
  APISTRING,
  EVENTS,
};
