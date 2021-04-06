import {
	Button,
	ResultSection,
	Container,
	SocialButtonGroup,
} from "components";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import elon from "assets/images/elon.jpg";
import RESULT from "components/ResultSection/result";

const Result = ({ setScore }) => {
	const { cCode } = useParams();
	const currentUrl = window.document.href;
	return (
		<>
			<Helmet>
				{/* URL 정보 */}
				<meta property="og:url" content={currentUrl} />
				{/* title 정보 */}
				<meta property="og:title" content={RESULT[cCode]["ogTitle"]} />
				{/* 페이지 상세 정보 */}
				<meta
					property="og:description"
					content={RESULT[cCode]["ogDescription"]}
				/>
				{/* 페이지 대표 이미지 정보 */}
				<meta property="og:image" content={RESULT[cCode]["ogImage"]} />
				{/* 트위터 메타 정보 */}
				<meta name="twitter:title" content={RESULT[cCode]["ogTitle"]} />
				<meta
					name="twitter:description"
					content={RESULT[cCode]["ogDescription"]}
				/>
				<meta name="twitter:image" content={RESULT[cCode]["ogImage"]} />
			</Helmet>
			<Container>
				<ResultSection cCode={cCode}></ResultSection>
				<SocialButtonGroup></SocialButtonGroup>
				<Button onClick={() => setScore(0)} to="/">
					테스트 다시하기
				</Button>
			</Container>
		</>
	);
};

export default Result;
