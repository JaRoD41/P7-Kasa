import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter }  from "react-router-dom"
import './style/normalize.css';
import App from './App';


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

