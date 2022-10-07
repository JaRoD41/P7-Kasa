import React from 'react'
import '../Cards/Card.scss'

export default function Card({cover, title}) {
	console.log(title);
  return (
		<article className="card_logement">
			<img src={cover} alt="location" />
			<h2>{title}</h2>
		</article>
	);
}
