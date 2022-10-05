import React from "react";
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import CardList from "../../components/CardList"
import Footer from "../../components/Footer"

export default function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<CardList />
			<Footer />
		</div>
	);
}
