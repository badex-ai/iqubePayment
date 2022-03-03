import React from "react";
import Contact from "../components/contact";
import classes from "./contactPage.module.css";

function contactPage() {
	return (
		<div className={classes.cont}>
			<div>
				{/* something here */}
				<Contact></Contact>
			</div>
		</div>
	);
}

export default contactPage;
