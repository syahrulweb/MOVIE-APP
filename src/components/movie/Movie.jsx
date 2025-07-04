import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";

function Movie(props) {
  const { movie } = props;

  // Pastikan Anda menggunakan properti yang benar dari OMDB API
  // OMDB memberikan URL poster lengkap di properti 'Poster'
  // Jika movie.Poster adalah "N/A" atau kosong, gunakan gambar placeholder
  const imageUrl = movie.Poster && movie.Poster !== "N/A"
                   ? movie.Poster
                   : "https://via.placeholder.com/300x450?text=No+Poster"; // Ganti dengan URL placeholder Anda jika ada

  // OMDB biasanya memiliki properti 'Title' dan 'Year'
  const title = movie.Title;
  const year = movie.Year;

  // OMDB menggunakan 'imdbID' untuk detail film
  const id = movie.imdbID;

  return (
    <StyledMovie>
      {/* Menggunakan imageUrl yang sudah ditangani kasus 'N/A' */}
      <img src={imageUrl} alt={title} />
      {/* Menggunakan Link ke detail berdasarkan imdbID */}
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;