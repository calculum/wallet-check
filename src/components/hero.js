import React from 'react';
import './hero.css';

export default function Hero(props) {
	return(
		<div className="row" id="hero">
			<h1>Wallet Check</h1>
			<p>Earning money is hard, but spending is pretty easy. So, keep your wallet checked.</p>
			<a href="#about"><i className="fa fa-angle-double-down"></i></a>
		</div>
	);
}