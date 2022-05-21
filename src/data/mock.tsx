import cover1 from "../assets/movie4.jpg";
import cover2 from "../assets/movie1.jpg";
import cover3 from "../assets/movie2.jpg";
import cover4 from "../assets/movie3.jpg";

export interface Movie {
  original_title?: string;
  title?: string;
  name?: string;
  video?: boolean;
  genre_ids?: number[];
  cover?: string;
  poster_path?: string;
  vote_average?: number | string;
  backdrop_path?: string;
  overview?: string;
  release_date?: string;
  id?: number | string;
  key?: string;
  include_video?: boolean;
  type?: string;
  original_language?: string;
  episode_run_time?: number[];
  vote_count?: number;
  adult?: boolean;
  languages?: string[];
  original_name?: string;
  origin_country?: string[];
  first_air_date?: string;
  spoken_languages?: { iso_639_1: string; name: string }[];
  number_of_episodes?: number;
  popularity?: number;
  profile_path?: string;
  known_for?: Movie[];
  known_for_department?: string;
}

const mockData: Movie[] = [
  {
    original_title: "The Wheel of Time",
    cover: cover1,
  },
  {
    original_title: "Seamen",
    cover: cover2,
  },
  {
    original_title: "The Boys",
    cover: cover3,
  },
  {
    original_title: "Hanna",
    cover: cover4,
  },
  {
    original_title: "The Wheel of Time",
    cover: cover1,
  },
  {
    original_title: "Seamen",
    cover: cover2,
  },
  {
    original_title: "The Boys",
    cover: cover3,
  },
  {
    original_title: "Hanna",
    cover: cover4,
  },
  {
    original_title: "The Wheel of Time",
    cover: cover1,
  },
  {
    original_title: "Seamen",
    cover: cover2,
  },
  {
    original_title: "The Boys",
    cover: cover3,
  },
];

export default mockData;
