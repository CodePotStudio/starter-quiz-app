import styled from "styled-components";
import {
	FacebookShareButton,
	TwitterShareButton,
	TwitterIcon,
	FacebookIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import kakaoLogo from "assets/images/kakao.png";
import { useEffect } from "react";
import { useScript } from "hooks";

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	align-items: center;
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

const KakaoShareButton = styled.a`
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;

const Title = styled.div`
	font-size: 16px;
	text-align: center;
	margin-bottom: 8px;
	font-weight: bold;
`;

const SocialButtonGroup = () => {
	const currentUrl = window.location.href;
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

	// kakao sdk 초기화하기
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("d2f8bffda79329fc9278a8bed23d88da");
			}
		}
	}, [status]);

	const handleKakaoButton = () => {
		window.Kakao.Link.sendScrap({
			requestUrl: currentUrl,
		});
	};

	return (
		<FlexContainer>
			<Title>나의 결과 공유하기</Title>
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
				<KakaoShareButton onClick={handleKakaoButton}>
					<KakaoIcon src={kakaoLogo}></KakaoIcon>
				</KakaoShareButton>
			</GridContainer>
		</FlexContainer>
	);
};

export default SocialButtonGroup;
