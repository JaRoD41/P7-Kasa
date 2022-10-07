import React from "react";
import Banner from "../../components/Banner/Banner"
import CardList from "../../components/Cards/CardList"
import Footer from "../../components/Footer/Footer"

export default function Home() {
	return (
		<div>
			<Banner />
			<CardList />
			<Footer />
		</div>
	);
}
