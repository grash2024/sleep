import React, { useState } from "react";
import One from "./components/One";

const App = () => {
	let [counter, setCounter] = useState(0);
	let add = () => {
		setCounter((prev) => prev + 1);
	};
	return (
		<div>
			<button onClick={() => add()}>count</button>
			<One />
			<Two />
		</div>
	);
};

export default App;
