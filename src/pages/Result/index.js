import { Button, ResultSection, Container } from "components";
import { useParams } from "react-router";

const Result = ({ setScore }) => {
	const { cCode } = useParams();
	return (
		<Container>
			<ResultSection cCode={cCode}></ResultSection>
			<Button onClick={() => setScore(0)} to="/">
				테스트 다시하기
			</Button>
		</Container>
	);
};

export default Result;
