import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: hsl(263, 65%, 46%);
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 7%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  a {
    color: purple;
    text-decoration: none;
    font-family: "Roboto";
  }
`;
