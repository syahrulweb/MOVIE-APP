import React from "react";
import Movie from "../movie/Movie";
import { Container, Section, Title, MovieContainer, MovieWrapper } from "./Movies.styled";

function Movies({ title, movies }) {
  return (
    <Container>
      <Section>
        <Title>{title}</Title>
        <MovieContainer>
          {movies.map((movie) => (
            <MovieWrapper key={movie.id}>
              <Movie movie={movie} />
            </MovieWrapper>
          ))}
        </MovieContainer>
      </Section>
    </Container>
  );
}

export default Movies;
