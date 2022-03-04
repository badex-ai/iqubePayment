import React from "react";
import classes from "./personalInfo.module.css";
import Button from "./button";
import Input from "./formInput";
import AsteriskIcon from "../assets/asterisk";
import { useNavigate } from "react-router";
import CancelBtn from "./cancelBtn";

function PersonalInfo(props) {
	let navigate = useNavigate();

	const cancel = (event) => {
		event.preventDefault();
		// navigate("/");
		console.log("clickitti click");
	};

	const goToNext = (event) => {
		console.log("next clicked");
		event.preventDefault();
		navigate("./billing");
	};

	return (
		<form onSubmit={goToNext} className={classes.cont}>
			<div className={classes.box}>
				<div className={classes.label}>
					<label>Name</label>
				</div>

				<Input name={"userName"} type={"text"}></Input>
			</div>
			<div className={classes.box}>
				<div className={classes.label}>
					<label>Email Address </label>
					<span className={classes.asterisk}>
						<AsteriskIcon></AsteriskIcon>
					</span>

					<div className={classes.smalltxt}>
						The purchase receipt would be sent to this address
					</div>
				</div>
				<Input name={"Email"} type={"email"} required></Input>
			</div>
			<div className={classes.box}>
				<div className={classes.label}>
					<label>Address 1</label>
				</div>
				<Input name={"address"} type={"text"}></Input>
			</div>
			<div className={classes.box}>
				<div className={classes.label}>
					<label>Address 2</label>
				</div>
				<Input name={"address2"} type={"text"}></Input>
			</div>
			<div className={classes.box2}>
				<div className={classes.lg}>
					<div className={classes.label}>
						<label>Local Government</label>
					</div>
					<Input name={"LGA"} type={"text"}></Input>
				</div>

				<div className={classes.sml}>
					<div className={classes.label}>
						<label>State</label>
					</div>
					<div className={classes.select}>
						<select>
							<option></option>
						</select>
					</div>
				</div>
			</div>

			<div>
				<Button type="submit" value={"Next"} color={"org"}></Button>

				<CancelBtn
					type={"reset"}
					value={"Cancel Payment"}
					cancelfunc={cancel}
				></CancelBtn>
			</div>
		</form>
	);
}

export default PersonalInfo;
