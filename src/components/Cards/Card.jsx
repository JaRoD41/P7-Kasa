export default function Card({ cover, title }) { //les cards de locations récupèrent les couvertures et titres en props depuis Home
	return (
		<article className="card-logement">
			<img src={cover} alt="location" />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</article>
	);
}
