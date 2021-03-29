import { Container, Spinner } from "components";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 64px;
	font-weight: bold;
	margin: 8px;
	margin-bottom: 96px;
	text-align: center;
`;

const getCCode = (score) => {
	let cCode;
	if (score > 75) {
		cCode = "elon";
	} else if (score > 50) {
		cCode = "kimbal";
	} else if (score > 25) {
		cCode = "bezos";
	} else {
		cCode = "timemachine";
	}
	return cCode;
};

const Loading = ({ convertedScore }) => {
	const [title, setTitle] = useState("결과 분석중");
	let history = useHistory();
	const cCode = getCCode(convertedScore);

	useEffect(() => {
		const id = setTimeout(() => {
			setTitle((title) => title + ".");
		}, 700);
		return () => clearTimeout(id);
	}, [title]);

	useEffect(() => {
		setTimeout(() => history.push(`/result/${cCode}`), 2000);
	}, [history, cCode]);

	return (
		<Container>
			<Title>{title}</Title>
			<Spinner></Spinner>
		</Container>
	);
};

export default Loading;
