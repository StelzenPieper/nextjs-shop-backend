import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  padding: 10px;
  text-align: center;
`;

export const ModalFooter = styled.div`
  padding: 10px;
`;

export const ModalTitle = styled.h4`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
