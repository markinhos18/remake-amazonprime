import cover1 from "../assets/movie4.jpg";
import cover2 from "../assets/movie1.jpg";
import cover3 from "../assets/movie2.jpg";
import cover4 from "../assets/movie3.jpg";

export interface Movie {
  title: string;
  cover: string;
  score?: number | string;
}

const mockData: Movie[] = [
  {
    title: "The Wheel of Time",
    cover: cover1,
  },
  {
    title: "Seamen",
    cover: cover2,
  },
  {
    title: "The Boys",
    cover: cover3,
  },
  {
    title: "Hanna",
    cover: cover4,
  },
  {
    title: "The Wheel of Time",
    cover: cover1,
  },
  {
    title: "Seamen",
    cover: cover2,
  },
  {
    title: "The Boys",
    cover: cover3,
  },
  {
    title: "Hanna",
    cover: cover4,
  },
  {
    title: "The Wheel of Time",
    cover: cover1,
  },
  {
    title: "Seamen",
    cover: cover2,
  },
  {
    title: "The Boys",
    cover: cover3,
  },
];

export default mockData;
