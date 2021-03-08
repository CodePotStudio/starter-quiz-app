import { useState } from "react";
import AnswerGroup from "../components/AnswerGroup";
import Container from "../components/Container";
import QuestionSection from "../components/QuestionSection";
import ResultSection from "../components/ResultSection";
import { QUIZZES } from "../constants";

const Quiz = () => {
	const [currentNo, setCurrentNo] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	const handleClick = (isCorrect) => {
		if (isCorrect) {
			setScore((score) => score + 1);
		}
		// 마지막 퀴즈인지 체크하기
		if (currentNo === QUIZZES.length - 1) {
			setShowResult(true);
		} else {
			setCurrentNo((currentNo) => currentNo + 1);
		}
	};
	const convertedScore = Math.floor((score / QUIZZES.length) * 100);

	return showResult ? (
		<Container>
			<ResultSection convertedScore={convertedScore}></ResultSection>
		</Container>
	) : (
		<Container>
			<QuestionSection currentNo={currentNo} />
			<AnswerGroup currentNo={currentNo} handleClick={handleClick} />
		</Container>
	);
};
export default Quiz;
