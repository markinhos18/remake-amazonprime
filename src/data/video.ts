export interface VideoProps {
  id?: number;
  results: [
    {
      iso_639_1?: string;
      iso_3166_1?: string;
      id?: number;
      key?: string;
      name?: string;
      site?: string;
      size?: number;
      type?: string;
      url?: string;
      official?: boolean;
    }
  ];
}
