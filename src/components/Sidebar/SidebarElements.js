import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
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
  justify-content: space-evenly;
  flex-direction: column;
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: green;
    transition: 0.2s ease-in-out;
  }
`;
