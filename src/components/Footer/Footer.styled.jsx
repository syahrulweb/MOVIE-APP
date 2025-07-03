// components/Footer/Footer.styled.jsx
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

export const FooterAuthor = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;
