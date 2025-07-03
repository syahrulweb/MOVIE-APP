import styled from "styled-components";

const sizes = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};

const Paragraph = styled.p`
  font-size: ${({ size }) => sizes[size] || sizes.md};
  color: ${({ color }) => color || "#555"};
  margin: 0.3rem 0;
  line-height: 1.5;
`;

export default Paragraph;
