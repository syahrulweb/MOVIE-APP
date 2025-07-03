// components/UI/Typography/Heading.jsx
import styled from "styled-components";

const sizes = {
  sm: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
};

const Heading = styled.h1`
  font-weight: 700;
  font-size: ${({ size }) => sizes[size] || sizes.md};
  color: ${({ color, theme }) => color || theme.colors.primary};
  margin: 0.5rem 0;
`;

export default Heading;
