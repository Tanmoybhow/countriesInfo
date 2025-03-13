import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const param = useParams();
  console.log(param)
  return (
    <div>
      <h1>Contcat Us</h1>
    </div>
  )
}

export default Contact
