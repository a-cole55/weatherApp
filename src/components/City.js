import React from 'react'

function City(props) {
  return (
    <div>
        <h2>{props.city}</h2>
        <span>{props.temp}</span>
        <span>{props.weatherCondition}</span>
    </div>
  )
}

export default City