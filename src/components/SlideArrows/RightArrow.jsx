import React from 'react'
import right from '../../assets/images/vector-right.svg'
import './SlideArrows.scss'


export default function RightArrow() {
  return (
		<div className="rightArrow">
			<img src={right} alt="right arrow" />
		</div>
	);
}
