import { useState, useEffect } from "react";

const FunctionComponent = ({ text }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("Hey I just mounted!");

		return () => console.log("This is our cleanup function!");
	}, []);

	useEffect(() => {
		console.log("Looks like we rerendered");
	});

	const incrementCount = () => setCount((prev) => prev + 1);

	return (
		<>
			<div>
				<h1>React Class Component Example</h1>
				<p>{text}</p>
			</div>
			<div>
				<h1>Count</h1>
				<div>{count}</div>
				<button onClick={incrementCount}>Increment</button>
			</div>
		</>
	);
};

export default FunctionComponent;
