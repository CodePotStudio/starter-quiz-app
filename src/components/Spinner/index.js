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
			<ScaleLoader height="160px" width="32px" color={color} radius="8px" />
		</Flex>
	);
};

export default Spinner;
