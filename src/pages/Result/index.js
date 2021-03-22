import { Link } from "react-router-dom";
import { QUIZZES } from "../../constants";
import { Button, ResultSection, Container } from "components";

const Result = ({ score, setScore }) => {
	const convertedScore = Math.floor((score / QUIZZES.length) * 100);
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
