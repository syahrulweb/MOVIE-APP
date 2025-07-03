// components/UI/Form/Label.jsx
import styled from "styled-components";

const Label = styled.label`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Label;
