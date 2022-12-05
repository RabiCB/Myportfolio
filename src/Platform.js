import React from 'react'
import './Platform.css'


const Platform = ({title,img,src}) => {
  return (
    <div className='Platform'>
        <img src={src} alt="git"/>
        <h3>{title}</h3>
    </div>
  )
}

export default Platform