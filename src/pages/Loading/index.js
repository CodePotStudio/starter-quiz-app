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

const Loading = () => {
	const [title, setTitle] = useState("결과 분석중");
	let history = useHistory();

	useEffect(() => {
		const id = setTimeout(() => {
			setTitle((title) => title + ".");
		}, 700);
		return () => clearTimeout(id);
	}, [title]);

	useEffect(() => {
		setTimeout(() => history.push("/result"), 2000);
	}, [history]);

	return (
		<Container>
			<Title>{title}</Title>
			<Spinner></Spinner>
		</Container>
	);
};

export default Loading;
