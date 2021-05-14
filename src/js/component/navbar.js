import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					width="150px"
					src="https://e7.pngegg.com/pngimages/191/778/png-clipart-logo-star-wars-brand-star-wars-logo-text-logo.png"
				/>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favoritos.
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favs.length > 0 ? (
						store.favs.map((element, i) => {
							return (
								<p key={i} className="dropdown-item">
									{element.name}
								</p>
							);
						})
					) : (
						<p className="dropdown-item">No hay favoritos</p>
					)}
				</div>
			</div>
			{/* 
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> 
			</div>*/}
		</nav>
	);
};
