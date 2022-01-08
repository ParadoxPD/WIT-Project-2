import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import infoLogo1 from "../../assets/location.svg";
import infoLogo2 from "../../assets/whatsapp-nav.svg";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavSection,
  NavMenu,
  NavLink,
  LogoWrapper,
  Infowrapper,
  Logo,
  InfoItem,
  LogoInfoWrapper,
  InfoLogo,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop({ duration: 600 });
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavSection style={{ height: "100px" }}>
            <LogoInfoWrapper style={{ height: "100px" }}>
              <LogoWrapper onClick={toggleHome}>
                <Logo src={logo} />
              </LogoWrapper>
              <Infowrapper>
                <InfoItem
                  onClick={() => {
                    window
                      .open("https://goo.gl/maps/fJAXporz5wcB5LV96", "_blank")
                      .focus();
                  }}
                >
                  <InfoLogo src={infoLogo1} />
                  Location
                </InfoItem>
                <InfoItem
                  onClick={() => {
                    window.open("https://wa.me/919438484582", "_blank").focus();
                  }}
                >
                  <InfoLogo src={infoLogo2} />
                  9438484582
                </InfoItem>
              </Infowrapper>
            </LogoInfoWrapper>
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
                  offset={-170}
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
                  offset={-160}
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
                  offset={-160}
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
                  offset={-160}
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
