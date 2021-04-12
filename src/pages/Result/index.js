import {
	Button,
	ResultSection,
	Container,
	SocialButtonGroup,
} from "components";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import RESULT from "components/ResultSection/result";
import { useEffect } from "react";
import { useScript } from "hooks";

const Result = ({ setScore }) => {
	const { cCode } = useParams();
	const currentUrl = window.document.href;
	const status = useScript("https://ads-partners.coupang.com/g.js");
	useEffect(() => {
		if (status === "ready") {
			new window.PartnersCoupang.G({
				id: 469213,
				template: "carousel",
				trackingCode: "AF1929228",
				width: "100%",
				height: "140",
			});
		}
	}, [status]);
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
				<a
					href="https://coupa.ng/bVY1Us"
					target="_blank"
					referrerpolicy="unsafe-url"
				>
					<img
						src="https://ads-partners.coupang.com/banners/469155?subId=&traceId=V0-301-969b06e95b87326d-I469155&w=320&h=100"
						alt=""
					/>
				</a>
			</Container>
		</>
	);
};

export default Result;
