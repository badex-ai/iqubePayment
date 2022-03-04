import React, { useState } from "react";
import classes from "./billingInfo.module.css";
import Button from "./button";
import Asterisk from "../assets/asterisk";
import FormInput from "./formInput";
import CancelBtn from "./cancelBtn";
import { useNavigate } from "react-router";

function BillingInfo() {
	let navigate = useNavigate();
	const [completed, setCompleted] = useState(false);

	const cancel = (event) => {
		console.log("i have been clicked");
		setCompleted(false);
	};

	const pay = (event) => {
		event.preventDefault();
		if (!completed) {
			setCompleted(true);
		} else {
			navigate("/pay/confirmed");
		}
	};

	const completedpop = (
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
	);

	const incomplete = (
		<div className={classes.box2}>
			<div className={classes.bx}>
				<div className={classes.label}>
					<label>Name on Card </label>
					<span className={classes.asterisk}>
						<Asterisk></Asterisk>
					</span>
				</div>
				<div>
					<FormInput name={"cardName"} type={"number"}></FormInput>
				</div>
			</div>
			<div className={classes.bx}>
				<div className={classes.label}>
					<label>Card Type </label>
					<span className={classes.asterisk}>
						<Asterisk></Asterisk>
					</span>
				</div>
				<div className={classes.select}>
					<select name="" id="">
						<option value="">Visa</option>
						<option value="">Verve</option>
						<option value="">Mastercard</option>
					</select>
				</div>
			</div>

			<div className={classes.card}>
				<div className={classes.cardDetail}>
					<div className={classes.label}>
						<label>Card Details</label>
						<span className={classes.asterisk}>
							<Asterisk></Asterisk>
						</span>
					</div>

					<FormInput></FormInput>
				</div>
				<div className={classes.cardExp}>
					<div className={classes.label}>
						<label>Expiry date </label>
						<span className={classes.asterisk}>
							<Asterisk></Asterisk>
						</span>
					</div>
					<div className={classes.smbox}>
						<input type="text" maxLength={2} className={classes.inputSm} />
						<div className={classes.slash}>
							<p>/</p>
						</div>

						<input maxLength={2} type="text" className={classes.inputSm} />
					</div>
				</div>
				<div className={classes.cardCvv}>
					<div className={classes.label}>
						<label>Cvv</label>
						<span className={classes.asterisk}>
							<Asterisk></Asterisk>
						</span>
					</div>

					<FormInput>/</FormInput>
				</div>
			</div>
		</div>
	);

	let display = completed ? completedpop : incomplete;

	return (
		<form onSubmit={pay} className={classes.cont}>
			{display}

			<div>
				<Button value="Pay" color="org"></Button>
				<CancelBtn
					type={"button"}
					value={"Cancel Payment"}
					cancelfunc={cancel}
				></CancelBtn>
			</div>
		</form>
	);
}

export default BillingInfo;
