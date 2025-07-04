import StyledMovie from "./Movie.styled"; // Ini sudah di atas
import { Link } from "react-router-dom";   // Ini juga sudah di atas

function Movie(props) {
  const { movie } = props;

  // 1. Definisikan gambar placeholder
  const placeholderImage = 'https://via.placeholder.com/300x450?text=No+Image+Available';

  // 2. Tentukan URL gambar yang akan digunakan
  // Prioritaskan movie.poster (jika ada dan valid)
  // Lalu cek movie.poster_path dari TMDB
  // Jika keduanya tidak ada, gunakan placeholderImage
  const finalImageUrl = movie.poster 
    ? movie.poster // Jika ada URL poster kustom
    : movie.poster_path 
      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` // Pastikan ini HTTPS!
      : placeholderImage; // Jika tidak ada keduanya, pakai placeholder
  
  const year = movie.year || movie.release_date;

  return (
    <StyledMovie>
      {/* Gunakan finalImageUrl yang sudah divalidasi */}
      <img src={finalImageUrl} alt={movie.title} /> 
      <Link to={`/movie/${movie.id}`}> 
        <h3>{movie.title}</h3>
      </Link>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;