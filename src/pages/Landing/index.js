import Container from "../../components/Container";
import styled from "styled-components";
import cover from "../../assets/images/cover.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Title = styled.h1`
	font-size: 40px;
	font-weight: bold;
	margin: 8px 0px;
	text-align: center;
	color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 24px;
	text-align: center;
	color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
	border-radius: 16px;
	opacity: 80%;
	margin-bottom: 16px;
	max-width: 100%;
	display: block;
`;

const Text = styled.p`
	font-size: 16px;
	margin-bottom: 24px;
`;

const Landing = () => (
	<Container>
		<Title>일론 머스크 지수 테스트</Title>
		<SubTitle>나는 일론 머스크에 대해서 얼마나 알고 있을까?</SubTitle>
		<StyledImage src={cover} alt="cover"></StyledImage>
		<Text>
			2021년 2월 기준 세계 2위 억만장자 일론 머스크. 테슬라, 스타링크, 스페이스
			X, 뉴럴링크까지 많은 혁신 기업을 배출한 일론 머스크에 대해서 얼마나 알고
			계신가요?
		</Text>
		<Link to="/quiz">
			<Button text="일론 머스크 지수 알아보기"></Button>
		</Link>
	</Container>
);

export default Landing;
