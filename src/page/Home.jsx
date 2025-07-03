// components/Home.jsx
import React, { useContext } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovie/AddMovie"; 
import MoviesContext from "@context/ContextMovie"; 

function Home() { 
  const { movies } = useContext(MoviesContext);  

  return (
    <main>
      <Hero />
      <Movies title="Latest Movies" movies={movies} /> 
      <AddMovie /> 
    </main>
  );
}

export default Home;
