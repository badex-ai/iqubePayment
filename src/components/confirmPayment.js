import React from "react";
import classes from "./confirmPayment.module.css";
import Check from "../assets/check";
import { Link } from "react-router-dom";

function confirmPayment() {
	return (
		<div className={classes.box}>
			<div className={classes.boxCont}>
				<div className={classes.innerbox}>
					<div className={classes.check}>
						<Check></Check>
					</div>

					<div className={classes.subtxt}>
						<h2>Purchase Completed</h2>
					</div>

					<p className={classes.txt}>
						Please check your email for details concerning this transaction
					</p>

					<Link className={classes.link} to={"../"}>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default confirmPayment;
