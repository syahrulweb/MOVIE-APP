import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  HeroSection,
  Left,
  Title,
  Genre,
  Description,
  WatchButton,
  Right,
  PosterImage,
} from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Fetch trending movie (ambil 1 movie saja)
    async function fetchTrendingMovies() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }

    // Fetch detail lengkap dari movie tersebut
    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  // Save genres dan trailer ke variabel
  const genres = movie && movie.genres?.map((genre) => genre.name).join(", ");
  const idTrailer = movie?.videos?.results?.[0]?.key;

  return (
    <Container>
      <HeroSection>
        <Left>
          <Title>{movie.title || "Loading..."}</Title>
          <Genre>{genres || "No genres available"}</Genre>
          <Description>{movie.overview || "No description"}</Description>
          <WatchButton
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Trailer
          </WatchButton>
        </Left>
        <Right>
          <PosterImage
            src={
              movie?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : "https://picsum.photos/350/350"
            }
            alt={movie?.title || "Movie poster"}
          />
        </Right>
      </HeroSection>
    </Container>
  );
}

export default Hero;
