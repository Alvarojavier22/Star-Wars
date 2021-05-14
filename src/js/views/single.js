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
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
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
