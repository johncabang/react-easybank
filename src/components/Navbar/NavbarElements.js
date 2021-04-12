import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 999;
  padding: 0 10rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    padding: 0 1rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  max-width: 1400px;
  width: 100%;
`;

export const Navlogo = styled(LinkRouter)`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkRouter)`
  color: #b2b2b2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid hsl(136, 65%, 51%);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 25px;
  background: transparent
    linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%) 50%) no-repeat
    padding-box;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  padding: 10px 20px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(1.2);
  }
`;
