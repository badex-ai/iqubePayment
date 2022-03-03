import React from "react";
import classes from "./contact.module.css";
import PersonalInfo from "./personalInfo";

import BillingInfo from "./billingInfo";
import { Route, Routes, Link } from "react-router-dom";

function Form() {
	return (
		<div className={classes.cont}>
			<div className={classes.title}>Complete your Purchase</div>

			<div className={classes.head}>
				<Link to={"./"}>Personal Info</Link>
				<Link to={"./billing"}>Billing Info</Link>
				<Link to={"./confirm"}>Confirm Payment</Link>
			</div>
			<hr></hr>
			<Routes>
				<Route path="/" element={<PersonalInfo />} exact />
				<Route path="billing" element={<BillingInfo />} exact />
			</Routes>
		</div>
	);
}

export default Form;
