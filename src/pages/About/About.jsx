import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse"
import aboutArray from "../../datas/aboutArray.json"


export default function About() {
	return (
		<div>
			<AboutBanner />
			{aboutArray.map((rule) => (
				<Collapse aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} />
			))}
		</div>
	);
}
