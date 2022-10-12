import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import VerticalModal from "./Modal";


function City(props) {
  const [modalShow, setModalShow] = useState(false);



  return (
    <div className='data'>
        <h2>{props.city}</h2>
        <span className='temperature'>{props.temp}&deg;F</span>
        <span className='condition'>{props.weatherCondition}</span>

        <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        More Info
      </Button>

      <VerticalModal 
        id="bg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        city={props.city}
        temp={props.temp}
        weatherCondition={props.weatherCondition}
        desc ={props.desc}
        pressure={props.pressure}
        humidity={props.humidity}
        visibility={props.visibility}
      />
    </>
    </div>
  )
}

export default City