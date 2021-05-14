import React from "react";
import PropTypes from "prop-types";

export const Personcard = props => {
	return (
		<div className="card col-3" style={{ width: "18rem" }}>
			<img
				src="https://i.blogs.es/23b58b/star-wars-wallpapers-6/1366_2000.jpg"
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
Personcard.propTypes = {
	name: PropTypes.string,
	imgsURL: PropTypes.string
};
