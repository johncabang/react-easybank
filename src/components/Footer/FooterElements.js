import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #3e436a;
  height: 160px;
  display: flex;
  justify-content: center;
  padding: 0 10rem 0 10rem;
`;

export const FooterLogo = styled(LinkRouter)`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
`;
