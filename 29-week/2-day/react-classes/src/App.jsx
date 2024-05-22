import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ClassComponent from "./components/ClassExample";
import FunctionComponent from "./components/FunctionComponent/FunctionComponent";

const text = "This is the text for the paragraph";

const router = createBrowserRouter([
	{
		path: "/class",
		element: <ClassComponent text={text} />,
	},
	{
		path: "/function",
		element: <FunctionComponent text={text} />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
