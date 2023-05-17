import React from 'react'
import { useParams } from 'react-router-dom'

const AddCard = () => {
  const { id } = useParams()

  return (
    <div>{id}</div>
  )
}

export default AddCard
