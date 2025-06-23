import { Modal } from "react-bootstrap";

 export const CustomerModal = ({
    modalShow,
    handleClose,
    header,
    body,
    footer,
    data,
    position,
    customClass,
    dialogClassName,
  }) => {
    return (
      <Modal
        centered
        show={modalShow}
        onHide={handleClose}
        // centered={position}
        // backgroundColor: "aliceblue",
        style={{ position: { position } }}
        className="custom-modal"
        // dialogClassName={dialogClassName}
      >
        <Modal.Header>
          {/* <Modal.Header closeButton> */}
          {header}

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{ backgroundColor: "white" }} // Change color here
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <Modal.Body>
          {
            <div>
              {body}
              {/* {data && (
                <Card className="p-4">
                  {data ? JSON.stringify(data) : "No data...."}
                </Card>
              )} */}
            </div>
          }
        </Modal.Body>
        <Modal.Footer>{footer}</Modal.Footer>
      </Modal>
    );
  };