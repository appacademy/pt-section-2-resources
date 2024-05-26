import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TweetList from "./components/TweetList";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <TweetList />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
