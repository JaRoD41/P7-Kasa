import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import axios from "axios";

export default function FicheLogement() {
	const params = useParams();
	const navigate = useNavigate();

	const [pickedAppart, setPickedAppart] = useState();
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("/logements.json"); //j'ai préféré utiliser une requète AXIOS pour être prêt à la future mise en place de l'API
			const picked = res.data.find(({ id }) => id === params.id);
			res.data.map(() => setPickedAppart(picked));
			if (picked === undefined) {
				navigate("/404", { state: { message: "Can't get data" } }); //renvoi vers la page 404 en cas d'URL de logement invalide
			}
		};
		getData();
		// eslint-disable-next-line
	}, []); // array vide du useEffect pour ne lancer qu'une seule fois
	const slidePics = pickedAppart && pickedAppart.pictures;
	const tags = pickedAppart && pickedAppart.tags;
	const equipments = pickedAppart && pickedAppart.equipments;
	const equip =
		pickedAppart &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	return (
		pickedAppart && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{pickedAppart.title}</h1>
							<h3>{pickedAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={pickedAppart.host.name}
								hostPic={pickedAppart.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rate score={pickedAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={pickedAppart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}
