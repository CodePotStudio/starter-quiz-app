import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Spinner = () => {
	const themeContext = useContext(ThemeContext);
	const color = themeContext.primaryColor100;

	return (
		<Flex>
			<ScaleLoader
				size={100}
				height="160"
				width="32"
				color={color}
				radius="8"
			/>
		</Flex>
	);
};

export default Spinner;
