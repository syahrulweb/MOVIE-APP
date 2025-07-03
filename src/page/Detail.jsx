import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// Styled Components langsung di sini
const StyledDetailMovie = styled.div`
  /* Mobile Screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary || "#0f172a"};
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary || "#334155"};
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }

  .info {
    padding: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }

  @media screen and (min-width: 992px) {
    gap: 2rem;

    h2 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1.05rem;
    }
  }

  .watch-btn {
    background-color: ${({ theme }) => theme.colors.primary || "#0f172a"};
    color: white;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    display: inline-block;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary || "#334155"};
    }
  }
`;

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
      setMovie(response.data);
    }

    getDetailMovie();
  }, [id]);

//   const genres = movie && movie.genres?.map((genre) => genre.name).join(", ");
  const trailer =
    movie && movie.videos?.results[0]
      ? `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
      : "#";

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        {/* <h3>{genres}</h3> */}
        <p>{movie.overview}</p>
        <a
          className="watch-btn"
          href={trailer}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch
        </a>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
