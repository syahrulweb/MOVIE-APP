import styled, { css } from "styled-components";

// Handle ukuran tombol berdasarkan theme dan props $size
const sizeStyles = ({ theme, $size }) => {
  const size = theme.buttonSizes[$size] || theme.buttonSizes.md;
  return css`
    font-size: ${size.fontSize};
    padding: ${size.padding};
  `;
};

// Styled Component Button dengan support variant, size, dan full width
const Button = styled.button`
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ theme, $size }) => sizeStyles({ theme, $size })}

  width: ${({ $full }) => ($full ? "100%" : "auto")};

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === "primary" ? theme.colors.secondary : theme.colors.primary};
  }
`;

export default Button;
