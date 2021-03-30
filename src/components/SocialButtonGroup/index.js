import styled from "styled-components";

// 버튼별로 40px을 확보하고, 각 영역 간에는 8px의 간격을 둠.
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	margin-bottom: 16px;
`;

const SocialButtonGroup = () => {
	return (
		<GridContainer>
			<button>1</button>
			<button>2</button>
			<button>3</button>
			<button>4</button>
		</GridContainer>
	);
};

export default SocialButtonGroup;
