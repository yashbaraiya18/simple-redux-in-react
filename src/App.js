import React from 'react'
import { useDispatch } from 'react-redux'
import {product_Action} from "./State/Actions"
import Child from './Child'

const App = () => {

  const dispatch = useDispatch()
  return (
    <>
    <h1>APP</h1>
    <button onClick = {()=>{dispatch(product_Action.number_add(100))}}>INCREASE + </button>
    <button onClick = {()=>{dispatch(product_Action.number_minus(100))}}>DECREASE - </button>
    <Child></Child>
    </>
  )
}

export default App

