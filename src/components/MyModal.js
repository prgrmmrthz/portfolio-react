import { Modal, Container } from "react-bootstrap";

const MyModal = ({ title, children, openModal, setOpenModal }) => {
  return (
    <div className="portfolio-modal">
      <Modal centered size="xl" show={openModal} onHide={setOpenModal}>
        <Modal.Header closeButton>
          <Modal.Title>
              {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;
