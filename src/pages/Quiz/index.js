import { useState } from "react";
import { useHistory } from "react-router";
import { QUIZZES } from "../../constants";
import { AnswerGroup, Container, QuestionSection } from "components";

const Quiz = ({ setScore }) => {
	const [currentNo, setCurrentNo] = useState(0);
	let history = useHistory();

	const handleClick = (isCorrect) => {
		if (isCorrect) {
			setScore((score) => score + 1);
		}
		// 마지막 퀴즈인지 체크하기
		if (currentNo === QUIZZES.length - 1) {
			history.push("/result");
		} else {
			setCurrentNo((currentNo) => currentNo + 1);
		}
	};

	return (
		<Container>
			<QuestionSection currentNo={currentNo} />
			<AnswerGroup currentNo={currentNo} handleClick={handleClick} />
		</Container>
	);
};
export default Quiz;
