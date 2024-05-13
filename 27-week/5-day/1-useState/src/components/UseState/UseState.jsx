import { useState, useEffect } from "react";
import "./UseState.css";

const UseState = () => {
	const [theme, setTheme] = useState("light");
	const [stateCount, setStateCount] = useState(0);
	let count = 0;

	const increment = () => {
		count++;
		setStateCount((prev) => prev + 1);
		console.log(count);
		console.log(stateCount);
	};

	return (
		<div className={`state ${theme}`}>
			<h1>UseState Component</h1>
			<button
				onClick={() =>
					setTheme((prev) => (prev === "light" ? "dark" : "light"))
				}
			>
				Toggle Theme
			</button>
			<h2>Count: {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={() => setStateCount((prev) => prev - 1)}>
				Decrement
			</button>
		</div>
	);
};

export default UseState;
