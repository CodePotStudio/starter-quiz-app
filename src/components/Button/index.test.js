// components/Button/index.test.js

import { Button } from "components";
import renderer from "react-test-renderer";

test("Hello 버튼 컴포넌트 테스트", () => {
	// 테스트를 실행하면 스냅샷을 생성함
	const tree = renderer
		.create(<Button onClick={() => console.log("hello")}>Hello</Button>)
		.toJSON();
	// 기존의 스냅샷과 비교하여 다른 점이 있는지 파악함
	expect(tree).toMatchSnapshot();
});
