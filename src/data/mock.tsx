import cover1 from "../assets/movie4.jpg";
import cover2 from "../assets/movie1.jpg";
import cover3 from "../assets/movie2.jpg";
import cover4 from "../assets/movie3.jpg";

export interface Movie {
  original_title: string;
  cover?: string;
  poster_path?: string;
  vote_average?: number | string;
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
