import React, { Fragment } from "react";
import classes from "./formInput.module.css";

function forminput(props) {
	return (
		<Fragment>
			<input
				type={props.type}
				name={props.name}
				className={classes.input}
			></input>
		</Fragment>
	);
}

export default forminput;
