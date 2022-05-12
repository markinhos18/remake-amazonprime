export interface SerieProps {
  page?: number;
  results: [
    {
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      backdrop_path: string;
      vote_average: number;
      vote_count: number;
      first_air_date: string;
      last_air_date: string;
      number_of_episodes: number;
      number_of_seasons: number;
      status: string;
      genres: [];
      networks: [];
      created_by: [];
      seasons: [];
      episodes: [];
      credits: {};
      videos: {};
      similar: [];
      recommendations: [];
      reviews: [];
      similar_series: [];
      similar_movies: [];
      similar_people: [];
      similar_tv: [];
      similar_games: [];
      similar_books: [];
      similar_music: [];
      similar_artists: [];
      similar_events: [];
      similar_venues: [];
      similar_products: [];
      similar_collections: [];
      similar_companies: [];
      similar_tags: [];
      similar_locations: [];
      similar_venues_and_events: [];
    }
  ];
}
