import { useState } from "react";

export default function MiniSlide({ slides, title, id }) {
	const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
	const length = slides.length; // longueur du tableau de slides
	let picsArray = [];
	slides.map((pics) => picsArray.push(pics));

	//console.log("picsArray", picsArray);

	const slideDelay = 2000;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};

	function stopShow() {
		clearTimeout(timer);
	}

	const timer = setTimeout(() => {
		nextSlide();
	}, slideDelay);

	return (
		<article
			className="card-logement"
			onMouseOver={() => nextSlide()}
			onMouseout={() => stopShow()}
		>
			<img key={id} src={picsArray[current]} alt="appartement à louer" />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</article>
	);
}
