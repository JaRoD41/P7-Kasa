import React, { useState } from "react";
import LeftArrow from "../../components/SlideArrows/LeftArrow";
import RightArrow from "../../components/SlideArrows/RightArrow";
import "./Carrousel.scss";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
	const length = slides.length; // longueur du tableau de slides

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
	};

	return (
		<div className="carrousel-container">
			<LeftArrow onClick={prevSlide} />
			<RightArrow onClick={nextSlide} />
			{slides.map((slide, index) => (
				<div key={index}>
					{index === current && (
						<img src={slide} alt="appartement" className="slideImage" />
					)}
				</div>
			))}
		</div>
	);
}

