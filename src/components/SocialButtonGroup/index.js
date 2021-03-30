import styled from "styled-components";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

// 버튼별로 40px을 확보하고, 각 영역 간에는 8px의 간격을 둠.
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	margin-bottom: 16px;
`;

const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: ${(props) => props.theme.primaryColor100};
	&:hover {
		background-color: ${(props) => props.theme.primaryColor80};
	}
`;

const SocialButtonGroup = () => {
	const currentUrl = window.location.href;

	return (
		<GridContainer>
			<FacebookShareButton url={currentUrl}>
				<FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
			</FacebookShareButton>
			<TwitterShareButton url={currentUrl}>
				<TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
			</TwitterShareButton>
			<CopyToClipboard text={currentUrl}>
				<URLShareButton>URL</URLShareButton>
			</CopyToClipboard>
			<button>4</button>
		</GridContainer>
	);
};

export default SocialButtonGroup;
