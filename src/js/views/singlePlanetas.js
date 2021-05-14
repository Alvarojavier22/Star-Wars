import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div className="row justify-content-center">
				<div className="card mb-3 col-5">
					<img
						height="250px"
						src="https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{store.planetadescripcion.name}</h5>
						<ul className="card-text">
							<li>Diameter: {store.planetadescripcion.diameter}</li>
							<li>Rotation period: {store.planetadescripcion.rotation_period}</li>
							<li>Orbital period: {store.planetadescripcion.orbital_period}</li>
							<li>
								Gravity:
								{store.planetadescripcion.gravity}
							</li>
							<li>
								Population:
								{store.planetadescripcion.population}
							</li>
							<li>Climate: {store.planetadescripcion.climate}</li>
							<li>Terrain: {store.personabiografia.terrain}</li>
							<li>Surface water: {store.planetadescripcion.surface_water}</li>
						</ul>

						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
						<Link to="/">
							<span className="btn btn-primary btn-lg" href="#" role="button">
								Home
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

SinglePlanetas.propTypes = {
	match: PropTypes.object
};
