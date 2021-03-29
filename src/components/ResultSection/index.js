import React from "react";
import styled from "styled-components";
import RESULT from "./result";

const SectionTitle = styled.h1`
	font-size: 64px;
	font-weight: bold;
	margin-top: 0px;
	margin-bottom: 56px;
	text-align: center;
`;

const StyledImage = styled.img`
	border-radius: 16px;
	opacity: 80%;
	margin-bottom: 16px;
	max-width: 100%;
	display: block;
`;

const ResultTitle = styled.div`
	font-size: 24px;
	margin-bottom: 56px;
	text-align: center;
`;

const ResultSection = ({ cCode }) => (
	<>
		<SectionTitle>당신은 혹시?</SectionTitle>
		<StyledImage src={RESULT[cCode].src} />
		<ResultTitle>{RESULT[cCode].title}</ResultTitle>
	</>
);
export default ResultSection;
