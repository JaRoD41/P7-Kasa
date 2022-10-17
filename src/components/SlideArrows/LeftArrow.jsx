import React from "react";
import left from "../../assets/images/vector-left.svg";
import "./SlideArrows.scss";

export default function LeftArrow() {
	return (
		<div className="leftArrow">
			<img src={left} alt="left arrow" />
		</div>
	);
}
