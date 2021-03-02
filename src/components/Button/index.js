// components/Button/index.js
import React from "react";
import "./Button.css";

const Button = (props) => (
	<button className="answer" onClick={props.onClick}>
		{props.text}
	</button>
);
export default Button;
