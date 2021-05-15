import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Planetcard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card col-3" style={{ width: "18rem" }}>
			<img
				src="https://www.geoenciclopedia.com/wp-content/uploads/2019/12/que_son_los_planetas.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>

				<Link onClick={() => actions.verplanet(props.posicion)} to={"/singleplanetas/" + props.posicion}>
					<p className="btn btn-primary">Ver mas.</p>
				</Link>

				<button
					onClick={() => {
						actions.agregarfavoritos({ name: props.name });
					}}
					type="button"
					className="btn btn-primary">
					Favs.
				</button>
			</div>
		</div>
	);
};
Planetcard.propTypes = {
	name: PropTypes.string,
	imgsURL: PropTypes.string,
	posicion: PropTypes.number
};
