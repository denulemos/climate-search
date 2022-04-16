import React from 'react'
import Form from './Form'
import Result from './Result'
import useClimate from '../hooks/useClimate'

const ClimateApp = () => {

  const {result} = useClimate();

  return (
    <>
    <main className="two-columns">
        <Form/>
        {result.name && <Result result={result}/>}
    </main>
    </>
  )
}

export default ClimateApp