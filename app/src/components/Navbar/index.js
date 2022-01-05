import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavSection,
  NavMenu,
  NavLink,
  LogoWrapper,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop({ duration: 600 });
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavSection>
            <LogoWrapper></LogoWrapper>
          </NavSection>
          <NavSection>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-140}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-140}
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-140}
                >
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="choose"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-140}
                >
                  Why Choose Us
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  to="gallery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-140}
                >
                  Gallery
                </NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-140}
                >
                  Contact Us
                </NavLink>
              </NavItem> */}
            </NavMenu>
          </NavSection>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
