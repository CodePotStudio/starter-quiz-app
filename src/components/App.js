import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Quiz, Landing, Result, Loading } from "pages";
import { QUIZZES } from "../constants";
import { Helmet } from "react-helmet";
import favicon from "assets/images/favicon.ico";

function App() {
	const [score, setScore] = useState(0);
	const convertedScore = Math.floor((score / QUIZZES.length) * 100);

	return (
		<ThemeProvider theme={theme}>
			<Helmet>
				<title>일론 머스크 지수 테스트하기</title>
				<link rel="icon" href={favicon} />
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
