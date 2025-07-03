import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  Brand,
  NavList,
  NavItem,
  NavLink,
} from "./Navbar.styled";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Brand>Movie App</Brand>
        <NavList>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/movie/create">Add Movie</NavLink></NavItem>
          <NavItem><NavLink to="/movie/popular">Popular</NavLink></NavItem>
          <NavItem><NavLink to="/movie/now">Now Playing</NavLink></NavItem>
          <NavItem><NavLink to="/movie/top">Top Rated</NavLink></NavItem>
        </NavList>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
