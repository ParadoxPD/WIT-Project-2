import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { colorScheme } from "../../global";
const navColor = colorScheme.red;
const navSwitchWidth = "840px";

export const Nav = styled.nav`
  background: ${navColor};
  height: 120px;
  margin-bottom: 30;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1rem;
  border-bottom: 5px solid ${navColor};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  padding: 0;
`;

export const NavSection = styled.div`
  display: flex;
  /* padding: 0 4vw; */
  justify-content: space-between;
  height: 60px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  background: ${colorScheme.black};
  justify-content: space-between;
  height: 60px;
  width: 100%;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-right: 40px;
  /* margin-left: 25px; */
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${navSwitchWidth}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${navSwitchWidth}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLink = styled(LinkS)`
  color: ${colorScheme.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.2rem;
  border-bottom: 5px solid transparent;

  &.active {
    border-bottom: 5px solid ${colorScheme.yellow};
    /* border-radius: 10px; */
  }
`;
