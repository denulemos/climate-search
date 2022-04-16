import React from 'react'
import useClimate from '../hooks/useClimate'

const Result = () => {
    const {result} = useClimate();
    const {name, main} = result;

    // convert to grad
    const temp = Math.round(main.temp - 273.15);
    const min = Math.round(main.temp_min - 273.15);
    const max = Math.round(main.temp_max - 273.15);

  return (
    <div className="container">
    <h2>The weather in {name} is: </h2>
    <p>
        <b>Current: {temp} C°</b>
    </p>
    <p>
        Max Temp: {max} C°
    </p>
    <p>
        Min Temp: {min} C°
    </p>
    </div>
  )
}

export default Result