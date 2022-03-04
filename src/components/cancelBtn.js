import React, { Fragment } from "react";
import classes from "./cancelBtn.module.css";

function cancelBtn(props) {
	const clickHandler = (event) => {
		event.preventDefault();
		props.cancelfunc(event);
	};
	return (
		<Fragment>
			<input
				className={classes.cancelbtn}
				type={props.type}
				value={props.value}
				onClick={clickHandler}
			></input>
		</Fragment>
	);
}

export default cancelBtn;
