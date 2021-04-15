import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  border: 2rem solid rgba(0, 0, 0, 0.5);
  border-bottom: 20rem solid rgba(0, 0, 0, 0.5);

  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "5rem" : "-100%")};
`;

export const SidebarWrapper = styled.div`
  background: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SidebarMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: hsl(136, 65%, 51%);
    transition: 0.2s ease-in-out;
  }
`;
