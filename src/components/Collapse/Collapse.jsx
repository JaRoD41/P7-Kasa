import React from 'react'
import './Collapse.scss'
import Chevron from '../../assets/images/vectorBas.svg'

export default function Collapse() {
  return (
    <div className='collapse-about'>

    <div className='accord-about__visible'>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <img src={Chevron} alt="chevron down" />
    </div>

    </div>
  )
}
