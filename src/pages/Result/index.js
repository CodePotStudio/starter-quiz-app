import { Button, ResultSection, Container } from "components";

const Result = ({ convertedScore, setScore }) => {
	return (
		<Container>
			<ResultSection convertedScore={convertedScore}></ResultSection>
			<Button onClick={() => setScore(0)} to="/">
				테스트 다시하기
			</Button>
		</Container>
	);
};

export default Result;
