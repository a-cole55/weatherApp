import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VerticalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.city}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.temp}</h4>
        <h6>Atmospheric pressure:</h6>
        <span>{props.pressure}hPa</span>
        <h6>Humidity:</h6>
        <span>{props.humidity}%</span>
        <h6>Visibility:</h6>
        <span>{props.visibility} m</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default VerticalModal;