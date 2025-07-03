import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export const Section = styled.section`
  margin: 5rem 0;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const MovieWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;
