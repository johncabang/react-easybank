import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
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
    background: transparent
      linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%) 50%)
      no-repeat padding-box;
    color: #fff;
  }
`;
