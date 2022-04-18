import React from 'react'
import Form from './Form'
import Result from './Result'
import Loading from './Loading'
import useClimate from '../hooks/useClimate'

const ClimateApp = () => {

  const {result, loading} = useClimate();

  return (
    <>
    <main className="two-columns">
        <Form/>
        {loading ? <Loading/> : result.name ? <Result result={result}/> : <h2>No results</h2>}
    </main>
    </>
  )
}

export default ClimateApp