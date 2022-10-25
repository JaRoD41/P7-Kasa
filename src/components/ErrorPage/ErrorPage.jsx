import React from 'react'
import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
		<div className="errorContainer">
			<h1 className="errorNumber">404</h1>
			<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}
