import { Navigate, useNavigate } from "react-router-dom";

// Navigate is used when we want to prevent JSX from rendering.
// Typically due to authorization

// useNavigate is used to redirect the user after they have performed
// some type of action.Typically used in event listener functions.

function Stocks() {
	const loggedIn = true;
	const navigate = useNavigate();

	if (!loggedIn) return <Navigate to="/not-logged-in" replace={true} />;

	const handleClick = () => {
		window.alert("Sending info to the database!");
		navigate("/");
	};

	return (
		<div className="comp orange">
			<h1>Stocks Component</h1>
			<button onClick={handleClick}>Send to database</button>
		</div>
	);
}

export default Stocks;
