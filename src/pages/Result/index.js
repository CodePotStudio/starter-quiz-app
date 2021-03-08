import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { QUIZZES } from "../../constants";

const Result = ({ score }) => {
	const convertedScore = Math.floor((score / QUIZZES.length) * 100);
	return (
		<Container>
			<ResultSection convertedScore={convertedScore}></ResultSection>
			<Link to="/">
				<Button text="테스트 다시하기"></Button>
			</Link>
		</Container>
	);
};

export default Result;
