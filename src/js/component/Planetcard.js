import React from "react";
import PropTypes from "prop-types";

export const Planetcard = props => {
	return (
		<div className="card col-3" style={{ width: "18rem" }}>
			<img
				src="https://www.geoenciclopedia.com/wp-content/uploads/2019/12/que_son_los_planetas.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>

				<a href="#" className="btn btn-primary">
					Ver mas.
				</a>
			</div>
		</div>
	);
};
Planetcard.propTypes = {
	name: PropTypes.string,
	imgsURL: PropTypes.string
};
