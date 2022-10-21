import React from 'react'
import "../../style/main.scss";

export default function Tag(props) {
  return (
		<div className="tagContainer">
			<span className='tagButton'>{props.tag}</span>
		</div>
	);
}
