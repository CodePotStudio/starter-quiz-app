import {
	Button,
	ResultSection,
	Container,
	SocialButtonGroup,
} from "components";
import { useParams } from "react-router";

const Result = ({ setScore }) => {
	const { cCode } = useParams();
	return (
		<Container>
			<ResultSection cCode={cCode}></ResultSection>
			<SocialButtonGroup></SocialButtonGroup>
			<Button onClick={() => setScore(0)} to="/">
				테스트 다시하기
			</Button>
		</Container>
	);
};

export default Result;
