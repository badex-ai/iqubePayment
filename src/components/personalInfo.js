import React from "react";
import classes from "./personalInfo.module.css";
import Button from "./button";
import Input from "./formInput";
import AsteriskIcon from "../assets/asterisk";

function personalInfo() {
	return (
		<form className={classes.cont}>
			<div className={classes.box}>
				<div className={classes.label}>
					<label>Name</label>
				</div>

				<Input></Input>
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
				<Input required></Input>
			</div>
			<div className={classes.box}>
				<div className={classes.label}>
					<label>Address 1</label>
				</div>
				<Input></Input>
			</div>
			<div className={classes.box}>
				<div className={classes.label}>
					<label>Address 2</label>
				</div>
				<Input></Input>
			</div>
			<div className={classes.box2}>
				<div className={classes.lg}>
					<div className={classes.label}>
						<label>Local Government</label>
					</div>
					<Input></Input>
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

			<div className={classes.btnBox}>
				<Button value={"Next"}></Button>
				<Button value={"Cancel Payment"} dec={"white"}></Button>
			</div>
		</form>
	);
}

export default personalInfo;
