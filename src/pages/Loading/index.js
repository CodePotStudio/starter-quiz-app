import { Container, Spinner } from "components";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Title = styled.h1`
	font-size: 64px;
	font-weight: bold;
	margin: 8px;
	margin-bottom: 96px;
	text-align: center;
`;

const Loading = () => {
	const [text, setText] = useState("결과 분석중");
	let history = useHistory();

	useEffect(() => {
		const timer = setTimeout(() => {
			setText((text) => text + ".");
		}, 1000);
		return () => clearInterval(timer);
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			history.push("/result");
		}, 3000);

		return () => clearInterval(timer);
	}, [history]);

	return (
		<Container>
			<Title>{text}</Title>
			<Spinner></Spinner>
		</Container>
	);
};

export default Loading;
