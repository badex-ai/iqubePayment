import { React, Fragment } from "react";
import "./button.css";

function button(props) {
	return (
		<Fragment>
			<button
				className={`btn ${props.color === "wht" ? "wht" : "org"}`}
				type="submit"
			>
				{props.value}
			</button>
		</Fragment>
	);
}

export default button;
