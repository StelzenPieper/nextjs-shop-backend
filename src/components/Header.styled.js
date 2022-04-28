import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: hsl(307, 100%, 50%);
  height: 7%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px 6px rgba(242, 242, 242, 0.8);
`;

export const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
