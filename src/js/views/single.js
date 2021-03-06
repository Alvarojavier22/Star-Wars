import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
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
						<h5 className="card-title">{store.personabiografia.name}</h5>
						<ul className="card-text">
							<li>Height: {store.personabiografia.height}</li>
							<li>Mass: {store.personabiografia.mass}</li>
							<li>Hair color: {store.personabiografia.hair_color}</li>
							<li>
								Skin color:
								{store.personabiografia.skin_color}
							</li>
							<li>
								Eye color:
								{store.personabiografia.eye_color}
							</li>
							<li>Birth year: {store.personabiografia.birth_year}</li>
							<li>Gender: {store.personabiografia.gender}</li>
							<li>Homeworld: {store.personabiografia.homeworld}</li>
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

Single.propTypes = {
	match: PropTypes.object
};
