import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent({
  modaalTitle,
  modalBody,
  modaalFooter,
  modalState,
  handleClose,
  children,
  width,
}) {
  return (
    <>
      <Modal
        show={modalState}
        onHide={handleClose}
        animation={false}
        style={{ width: width }}
      >
        <Modal.Header>
          <Modal.Title>{modaalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody ?? children}</Modal.Body>
        {/* <Modal.Footer>{modaalFooter}</Modal.Footer> */}
      </Modal>
    </>
  );
}