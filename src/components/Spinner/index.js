import ScaleLoader from "react-spinners/ScaleLoader";

const Spinner = ({ loading }) => {
	return (
		<ScaleLoader
			size={100}
			height="160"
			width="32"
			color="#6b5ce7"
			radius="8"
		/>
	);
};

export default Spinner;
