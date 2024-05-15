import { useState, useEffect } from "react";
import { useHoroscope } from "../context/HoroscopeContext";

const Match = () => {
	const [match, setMatch] = useState(false);
	const { sign } = useHoroscope();

	const handleClick = () => setMatch((prev) => !prev);

	// useEffect(() => {
	// 	setMatch(false);
	// }, [sign]);

	return (
		<div>
			<button onClick={handleClick}>Show Match</button>
			{match && <div>Match: {sign.match}</div>}
		</div>
	);
};

export default Match;
