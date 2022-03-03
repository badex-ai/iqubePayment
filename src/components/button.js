import { React, Fragment } from "react";
import classes from "./button.module.css";

function button(props) {
	return (
		<Fragment>
			<button className={classes.org} type="submit">
				{props.value}
			</button>
		</Fragment>
	);
}

export default button;
