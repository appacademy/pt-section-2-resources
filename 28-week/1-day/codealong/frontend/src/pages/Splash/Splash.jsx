import { useEffect } from "react";
import "./Splash.css";

const Splash = () => {
	useEffect(() => {
		(async () => {
			const res = await fetch("/api");
			const data = await res.json();
			console.log(data);
		})();
	}, []);

	return (
		<div>
			<h1>Welcome to the form creation code along!</h1>
		</div>
	);
};

export default Splash;
