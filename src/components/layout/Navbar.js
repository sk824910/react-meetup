import React from "react";

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/new-meetups" activeStyle>
            New Meetups
          </NavLink>
          <NavLink to="/favorites" activeStyle>
            Favorites
          </NavLink>
          <NavLink to="/modalpage" activeStyle>
            Modal Page
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
