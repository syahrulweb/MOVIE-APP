import AddMovie from "../components/AddMovie/AddMovie";  
import Hero from "../components/Hero/Hero";

// Komponen CreateMovie
function CreateMovie({ movies, setMovies }) {  
  return (
    <>
      <Hero />
      <AddMovie 
        movies={movies}  
        setMovies={setMovies}  
      />
    </>
  );
}

export default CreateMovie;
