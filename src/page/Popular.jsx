import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {

        // const API_KEY = import.meta.env.VITE_API_KEY;
        // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        // const response = await axios(URL);
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
        // console.log(response);

    }

    fetchPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} />
      <h2>Popular Movie</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default PopularMovie;
