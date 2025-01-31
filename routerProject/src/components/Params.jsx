import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {id}=useParams()
  return (
    <div
    className='text-2xl font-semibold text-center mt-20'
    >Params:{id}</div>
  )
}

export default Params