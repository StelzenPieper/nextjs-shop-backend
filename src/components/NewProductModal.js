import React from "react";
import AddNewProductForm from "./AddNewProductForm";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./Modal.styled";

const ProductModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <Modal onClick={props.onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Add New Product</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <AddNewProductForm />
        </ModalBody>
        <ModalFooter>
          <button className="modal-button" onClick={props.onClose}>
            Close
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
