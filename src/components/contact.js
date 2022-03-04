import React from "react";
import classes from "./contact.module.css";
import PersonalInfo from "./personalInfo";

import BillingInfo from "./billingInfo";
import Completed from "./confirmPayment";
import { Route, Routes, Link, NavLink } from "react-router-dom";

function Form() {
	return (
		<div className={classes.cont}>
			<div className={classes.title}>Complete your Purchase</div>

			<div className={classes.head}>
				<NavLink
					className={({ isActive }) =>
						isActive ? classes.active : classes.notActive
					}
					to={"./"}
				>
					Personal Info
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? classes.active : classes.notActive
					}
					to={"./billing"}
				>
					Billing Info
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? classes.active : classes.notActive
					}
					to={"./confirmed"}
				>
					Confirm Payment
				</NavLink>
			</div>
			<hr></hr>
			<Routes>
				<Route path="/" element={<PersonalInfo />} exact />
				<Route path="billing" element={<BillingInfo />} exact />
				<Route path="confirmed" element={<Completed />} exact />
			</Routes>
		</div>
	);
}

export default Form;
