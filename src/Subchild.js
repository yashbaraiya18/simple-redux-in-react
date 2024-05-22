import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { product_Action } from './State/Actions'



const Subchild = () => {
  const product_state = useSelector(state=>state.product)

  const dispatch = useDispatch()
  return (
    <>
    <h1>APP</h1>
    <p>{product_state.product_name}</p>
    <p>{product_state.product_price}</p>
    <button onClick = {()=> dispatch(product_Action.number_add(100))}>INCREASE + </button>
    <button onClick = {()=> dispatch(product_Action.number_minus(100))}>DECREASE - </button>
    </>
  )
}

export default Subchild