import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Brand = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
