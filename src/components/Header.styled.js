import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: hsl(263, 65%, 46%);
  height: 7%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
