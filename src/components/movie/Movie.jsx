import StyledMovie from "./Movie.styled"; // Path ke styled-component Movie Anda
import { Link } from "react-router-dom";

function Movie(props) {
  const { movie } = props; // Objek 'movie' ini diharapkan dari TMDB API

  // URL dasar TMDB untuk gambar poster
  // Pastikan path image (movie.poster_path) selalu dimulai dengan '/'.
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  // URL gambar placeholder jika poster dari API tidak ada
  // Menggunakan placeholder online untuk menghindari masalah file lokal
  const placeholderImageUrl = "https://via.placeholder.com/300x450?text=No+Poster";

  // Menentukan URL gambar yang akan ditampilkan:
  // 1. Jika movie.poster_path ada dan valid dari TMDB, gunakan itu.
  // 2. Jika tidak, gunakan URL placeholder.
  const imageUrlToDisplay = movie.poster_path
                            ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
                            : placeholderImageUrl;

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
