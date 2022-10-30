import { useState } from "react";

export default function MiniSlide({ slides }) {
	const [isShown, setIsShown] = useState(false);
	const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
	const length = slides.length; // longueur du tableau de slides
	const timeSlide = 2000;
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};
	return (
		<div className="miniSlide">
			<section id="carrousel-container">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={
							current === index
								? "slider bl-msk wh-msk active-anim"
								: "slider bl-msk wh-msk"
						}
					>
						{index === current && (
							<img
								src={slide}
								alt="appartement à louer"
								onMouseEnter={() => nextSlide()}
								onMouseLeave={() => setIsShown(false)}
							/>
						)}
					</div>
				))}
			</section>
		</div>
	);
}
