import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="notNavbar">
				<Link to="/">
					<button className="btn btn-primary d-flex justify-content-end">
						Add new contact
					</button>
				</Link>
		</div>
	);
};
