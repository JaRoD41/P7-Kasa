import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import data from "../../datas/logements.json";

export default function FicheLogement() {
	const params = useParams()
	const pickedAppart = data.find(({ id }) => id === params.id)
	return (
		<div key={params.id}>
			<Carrousel />
			<h1>{pickedAppart.title}</h1>
			<h3>{pickedAppart.location}</h3>
			<Host />
			<Tag />
			<Rate />
			<div className="collapse-fiche-content">
				<Collapse
					aboutTitle="Description"
					aboutText={pickedAppart.description}
				/>
				<Collapse
					aboutTitle="Équipements"
					aboutText={pickedAppart.description}
				/>
			</div>
		</div>
	);
}
