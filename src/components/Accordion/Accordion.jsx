import React from 'react'
import './Accordion.scss'
import Chevron from '../../assets/images/vectorBas.svg'

export default function Accordion() {
  return (
    <div className='accord-about'>

    <div className='accord-about-visible'>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <img src={Chevron} alt="chevron down" />
    </div>

    </div>
  )
}
