import React from 'react'
import './Cards.css'

const Cards = ({title,about}) => {
  return (
    <div className='Cards'>
        <h3>{title}</h3>
        <p>{about}</p>
    </div>
  )
}

export default Cards