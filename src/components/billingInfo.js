import React from "react";
import classes from "./billingInfo.module.css";
import Button from "./button";
import Asterisk from "../assets/asterisk";
import FormInput from "./formInput";

function billingInfo() {
	return (
		<div className={classes.cont}>
			<div className={classes.box}>
				<table>
					<thead>
						<tr className={classes.thead}>
							<td>Item Name</td>
							<td>Price</td>
						</tr>
					</thead>

					<tbody className={classes.tbody}>
						<tr>
							<td>Data science and usability</td>
							<td>50,000.00</td>
						</tr>
						<tr>
							<td>Shipping</td>
							<td>0.00</td>
						</tr>
					</tbody>
				</table>
				<div className={classes.sumCont}>
					<div className={classes.sumline}>
						<div className={classes.sum}>
							<div className={classes.digit}>
								<p>Total</p>
							</div>
							<div className={classes.digit}>
								<p>50,000.00</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<Button value="Pay"></Button>
				<Button value="Cancel Payment"></Button>
			</div>
		</div>
	);
}

export default billingInfo;
