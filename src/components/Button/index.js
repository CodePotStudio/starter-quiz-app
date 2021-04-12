import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	width: 100%;
`;

const StyledButton = styled.button`
  font-size: ${(props) => (props.fontSize === "big" ? "32px" : "16px")};
	color: #ffffff;
  background-color: ${(props) => props.theme.primaryColor100};
	border-radius: 5px;
	border: 0px;
	height: 56px;
	padding: 4px;
	margin: 4px 0px;
	cursor: pointer;
	width: 100%;
	outline: none;
	font-weight: 700;
	&:hover {
    background-color: ${(props) => props.theme.primaryColor80};
	}
}
`;

const Button = ({ to, onClick, children, fontSize }) =>
	to ? (
		<StyledLink to={to}>
			<StyledButton onClick={onClick} fontSize={fontSize}>
				{children}
			</StyledButton>
		</StyledLink>
	) : (
		<StyledButton onClick={onClick} fontSize={fontSize}>
			{children}
		</StyledButton>
	);
export default Button;
