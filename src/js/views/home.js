import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.scss";
import { Personcard } from "../component/Personcard.js";
import { Planetcard } from "../component/Planetcard.js";
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div className="contenedor d-flex">
				{" "}
				{store.personas.map((element, i) => {
					return <Personcard key={i} name={element.name} />;
				})}
			</div>
			<div className="contenedor d-flex">
				{" "}
				{store.planetas.map((element, i) => {
					return <Planetcard key={i} name={element.name} />;
				})}
			</div>
		</div>
	);
};
