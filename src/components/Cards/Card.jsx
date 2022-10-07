import React from 'react'
import { Link } from "react-router-dom"
import '../Cards/Card.scss'

export default function Card() {
  return (
		<div>
			<article className="card_logement">
				<Link to="/logement/:id" className="link_card_logement">
					NOM DU LOGEMENT
					<figure className="photo_card_logement">
						<img src="" alt="" />
					</figure>
				</Link>
			</article>
		</div>
	)
}
