
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: #f8fafc;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Left = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Genre = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #334155;
  margin-bottom: 1.5rem;
`;

export const WatchButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Right = styled.div`
  flex: 1;
  text-align: center;
`;

export const PosterImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;
