// components/UI/Form/Input.jsx
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Input;
