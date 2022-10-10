import React from 'react'

function City(props) {
  return (
    <div className='data'>
        <h2>{props.city}</h2>
        <span className='temperature'>{props.temp}&deg;F</span>
        <span className='condition'>{props.weatherCondition}</span>
    </div>
  )
}

export default City