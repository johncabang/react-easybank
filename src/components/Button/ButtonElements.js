import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(LinkRouter)`
  background: transparent
    linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%) 50%) no-repeat
    padding-box;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  padding: 10px 20px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(1.2);
  }
`;
