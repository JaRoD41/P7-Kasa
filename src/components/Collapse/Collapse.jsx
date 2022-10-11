import React from 'react'
import './Collapse.scss'
import Chevron from '../../assets/images/down-chevron.png'

export default function Collapse() {
  return (
    <div className='collapse-about'>

    <div className='collapse-about__visible'>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <img src={Chevron} alt="chevron down" />
    </div>

    <div className="collapse-about__toggle">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi odio quas labore earum culpa assumenda minus. Delectus, deserunt voluptates expedita labore sapiente sequi ex distinctio quasi quia cumque ratione!</p>
    </div>

    </div>
  )
}
