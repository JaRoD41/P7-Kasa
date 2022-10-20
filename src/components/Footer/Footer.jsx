import React from 'react'
import logo from '../../assets/images/logo-footer.svg'
import "../../style/main.scss";

export default function Footer() {
  return (
		<footer className="container">
			<img src={logo} alt="logo de kasa" />
			<p className="container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
