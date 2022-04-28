import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: hsl(307, 100%, 50%);
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
  box-shadow: 0 0 10px 6px rgba(242, 242, 242, 0.8);

  a {
    color: purple;
    text-decoration: none;
    font-family: "Roboto";
  }
`;
