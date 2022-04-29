import React from "react";
import AddNewCategoryForm from "./AddNewCategoryForm";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./NewCategoryModal.styled";

const CategoryModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <Modal onClick={props.onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Add New Category</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <AddNewCategoryForm />
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

export default CategoryModal;
