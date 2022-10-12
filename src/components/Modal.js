import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VerticalModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.city}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="details">
        <h4>{props.temp}&deg;F</h4>
        <h5>{props.desc}</h5>
        <span><strong>Atmospheric Pressure:</strong></span>
        <span>{props.pressure} hPa</span>
        <span><strong>Humidity:</strong></span>
        <span>{props.humidity}%</span>
        <span><strong>Visibility:</strong></span>
        <span>{props.visibility} m</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default VerticalModal;