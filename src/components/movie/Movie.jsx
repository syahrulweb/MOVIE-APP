import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";

function Movie(props) {
  const { movie } = props; // Objek 'movie' ini diharapkan dari TMDB API

  // Base URL TMDB untuk gambar poster
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  // Menentukan URL gambar yang akan ditampilkan:
  // 1. Jika movie.poster_path ada dan valid dari TMDB, gunakan itu.
  // 2. Jika tidak, gunakan URL placeholder.
  const imageUrlToDisplay = movie.poster_path
                            ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
                            : "https://via.placeholder.com/300x450?text=No+Poster"; // Gunakan URL placeholder yang lengkap dan valid

  // Properti film dari TMDB API:
  const title = movie.title;           // TMDB menggunakan 'title' (huruf kecil)
  const year = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'; // TMDB menggunakan 'release_date'
  const id = movie.id;                 // TMDB menggunakan 'id' untuk ID unik

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