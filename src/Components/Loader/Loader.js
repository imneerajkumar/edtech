import { Spinner } from "react-bootstrap";
import React from "react";
import "./Loader.css";
const loader = () => {
	return (
		<div className="spin-container">
			<Spinner className="spin" animation="border" role="status">
				<span className=" sr-only">Loading...</span>
			</Spinner>
		</div>
	);
};

export default loader;
