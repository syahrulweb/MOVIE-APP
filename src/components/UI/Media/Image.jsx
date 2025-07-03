// components/UI/Media/Image.jsx
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ rounded }) => (rounded ? "12px" : "0")};
  object-fit: cover;
`;

export default Image;
