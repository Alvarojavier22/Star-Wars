import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Personcard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card col-3" style={{ width: "18rem" }}>
			<img
				src="https://i.blogs.es/23b58b/star-wars-wallpapers-6/1366_2000.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>

				<Link onClick={() => actions.verBioPerson(props.posicion)} to={"/single/" + props.posicion}>
					<p className="btn btn-primary">Ver mas.</p>
				</Link>
			</div>
		</div>
	);
};
Personcard.propTypes = {
	name: PropTypes.string,
	imgsURL: PropTypes.string,
	posicion: PropTypes.number
};
