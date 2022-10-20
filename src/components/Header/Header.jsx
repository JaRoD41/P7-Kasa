import React from 'react'
import logo from '../../assets/images/LOGO.svg'
import Nav from '../Nav/Nav'
import "../../style/main.scss";

export default function Header() {
  return (
		<header className="headerWrap">
			<figure className='headerWrap__fig'>
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
	)
}
