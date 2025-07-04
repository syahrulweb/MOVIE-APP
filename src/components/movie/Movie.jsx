import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";

function Movie(props) {
  const { movie } = props; // movie objek ini berasal dari TMDB

  // URL dasar untuk gambar poster TMDB.
  // Pastikan path image selalu dimulai dengan '/'.
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  // URL gambar yang akan ditampilkan.
  // Jika movie.poster_path ada, gunakan itu dengan base URL TMDB.
  // Jika tidak ada, gunakan placeholder.
  const imageUrlToDisplay = movie.poster_path
                            ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
                            : "https://via.placeholder.com/300x450?text=No+Poster"; // Atau "/ayuy.png" jika ingin lokal

  // Properti film dari TMDB API:
  const title = movie.title;           // TMDB pakai 'title' (huruf kecil)
  const year = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'; // TMDB pakai 'release_date'
  const id = movie.id;                 // TMDB pakai 'id' untuk unique ID

  return (
    <StyledMovie>
      <img src={imageUrlToDisplay} alt={title} />
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;