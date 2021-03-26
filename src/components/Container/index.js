import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ContainerWrapper = styled.div`
	width: 500px;
	margin-top: 72px;
	display: flex;
	flex-direction: column;
`;

const Container = (props) => (
	<FlexBox>
		<ContainerWrapper>{props.children}</ContainerWrapper>
	</FlexBox>
);
export default Container;
