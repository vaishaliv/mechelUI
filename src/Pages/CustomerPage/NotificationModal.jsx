import { Modal } from "react-bootstrap";

export const NotificationModal = ({
  modalShow,
  handleClose,
  header,
  body,
  footer,
  data,
}) => {
  return (
    <Modal
      show={modalShow}
      onHide={handleClose}
      position="top"
      // style={{ position: { position } }}
    >
      <Modal.Header closeButton>{header}</Modal.Header>
      <Modal.Body>{<div>{body}</div>}</Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};
