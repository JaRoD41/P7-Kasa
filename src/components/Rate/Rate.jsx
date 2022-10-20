import React from "react";
import star from "../../assets/images/star-rate.svg";
import "../../style/main.scss";

export default function Rate(props) {
	const stars = props.score;
	console.log(stars);
	return (
		<div className="rate-comp">
			<span>
				<img
					className={stars < 1 ? "star empty" : "star filled"}
					src={star}
					alt="rating star"
				/>
			</span>
			<span>
				<img
					className={stars < 2 ? "star empty" : "star filled"}
					src={star}
					alt="rating star"
				/>
			</span>
			<span>
				<img
					className={stars < 3 ? "star empty" : "star filled"}
					src={star}
					alt="rating star"
				/>
			</span>
			<span>
				<img
					className={stars < 4 ? "star empty" : "star filled"}
					src={star}
					alt="rating star"
				/>
			</span>
			<span>
				<img
					className={stars < 5 ? "star empty" : "star filled"}
					src={star}
					alt="rating star"
				/>
			</span>
		</div>
	);
}
