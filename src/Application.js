import React from 'react'
import react from './react.png'
import bootstrap from './bootstrap.png'
import photoshop from './photoshop.png'
import javascript from './javascript.png'
import Platform from './Platform'
import './Application.css'

const Application = () => {
  return (
    <div className='Application'>
        <Platform title="React" img src={react}/>
        <Platform title="Javascript" img src={javascript}/>
        <Platform title="bootstrap" img src={bootstrap}/>
        <Platform title="photoshop" img src={photoshop}/>
    </div>
  )
}

export default Application