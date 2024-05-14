import {
	createBrowserRouter,
	RouterProvider,
	NavLink,
	Outlet,
} from "react-router-dom";

import Splash from "./pages/Splash";
import Form from "./pages/Form";
import Navbar from "./components/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		path: "/",
		children: [
			{
				index: true,
				element: <Splash />,
			},
			{
				path: "form",
				element: <Form />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
