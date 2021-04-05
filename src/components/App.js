import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Quiz, Landing, Result, Loading } from "pages";
import { QUIZZES } from "../constants";
import { Helmet } from "react-helmet";
import favicon from "assets/images/favicon.ico";
import elon from "assets/images/elon.jpg";

function App() {
	const [score, setScore] = useState(0);
	const convertedScore = Math.floor((score / QUIZZES.length) * 100);
	const currentUrl = window.location.href;

	return (
		<ThemeProvider theme={theme}>
			<Helmet>
				<title>일론 머스크 지수 테스트하기</title>
				<link rel="icon" href={favicon} />
				{/* URL 정보 */}
				<meta property="og:url" content={currentUrl} />
				{/* title 정보 */}
				<meta property="og:title" content="일론 머스크 지수 테스트하기" />
				{/* 페이지 상세 정보 */}
				<meta
					property="og:description"
					content="나는 일론 머스크에 대해서 얼마나 알고 있을까?"
				/>
				{/* 페이지 대표 이미지 정보 */}
				<meta property="og:image" content={elon} />
				{/* 트위터 메타 정보 */}
				<meta name="twitter:title" content="일론 머스크 지수 테스트하기" />
				<meta
					name="twitter:description"
					content="나는 일론 머스크에 대해서 얼마나 알고 있을까?"
				/>
				<meta name="twitter:image" content={elon} />
			</Helmet>
			<GlobalStyle />
			<Router>
				<Route path="/result/:cCode">
					<Result convertedScore={convertedScore} setScore={setScore} />
				</Route>
				<Route path="/quiz">
					<Quiz setScore={setScore} />
				</Route>
				<Route path="/loading">
					<Loading convertedScore={convertedScore} />
				</Route>
				<Route path="/" exact>
					<Landing />
				</Route>
			</Router>
		</ThemeProvider>
	);
}

export default App;
