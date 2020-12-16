import "./App.css";
import React from "react";

function App() {
	return (
		<div className="container">
			<div className="app">
				<div className="question-section">
					<h1 className="question-header">
						<span>1</span>/4
					</h1>
					<div className="question-text">
						일론 머스크의 우주 탐사 기업 이름은?
					</div>
				</div>
				<div className="answer-section">
					<button>스페이스 엑스</button>
					<button>테슬라</button>
					<button>보링 컴퍼니</button>
					<button>솔라시티</button>
				</div>
			</div>
		</div>
	);
}

export default App;
