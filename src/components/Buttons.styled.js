import styled from "styled-components";

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  color: white;
  padding: 12px;
`;

export const OpenModalButton = styled.button`
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: green;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  position: fixed;
  bottom: 10%;
  right: 5%;

  :hover {
    box-shadow: 0px 15px 20px rgba(60, 179, 113, 0.4);
    transform: translateY(-7px);
  }
`;

export const CardButton = styled.button`
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.delete &&
    `
      background: red;
      color: white;
      :hover {
    box-shadow: 0px 15px 20px rgba(255, 0, 0, 0.4);
    transform: translateY(-7px);
  }
    `}

  ${(props) =>
    props.edit &&
    `
    background: yellow;
      color: black;
      :hover {
    box-shadow: 0px 15px 20px rgba(255, 255,140, 0.4);
    transform: translateY(-7px);
  }
    `}
`;
