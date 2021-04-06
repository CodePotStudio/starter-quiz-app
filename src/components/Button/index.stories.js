import React from "react";
import styled from "styled-components";
import Button from "./";

// 사용할 컴포넌트에 대한 명세
export default {
	title: "Components/Button",
	component: [Button],
	// fontSize 값을 storybook에서 받을 수 있도록 설정하기
	argTypes: {
		fontSize: {
			control: {
				type: "radio",
				options: ["big", "small"],
			},
		},
	},
};

const Container = styled.div`
	width: 200px;
`;

export const StyledButton = (args) => (
	<Container>
		<Button {...args}>Hello</Button>
	</Container>
);

export const StyledButtonWithLink = (args) => (
	<Container>
		<Button to="/somewhere" {...args}>
			Hello
		</Button>
	</Container>
);
