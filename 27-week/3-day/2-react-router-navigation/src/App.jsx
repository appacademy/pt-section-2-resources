import {
	createBrowserRouter,
	RouterProvider,
	NavLink,
	Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";

const Layout = () => {
	const navClass = ({ isActive }) => (isActive ? "purple" : "");

	return (
		<div className="app">
			<h1>App Component</h1>
			<nav>
				<ul className="comp nav">
					<li>
						<NavLink className={navClass} to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={navClass} to="/stocks">
							Stocks
						</NavLink>
					</li>
					<li>
						<NavLink className={navClass} to="/movies">
							Movies
						</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "stocks",
				element: <Stocks />,
			},
			{
				path: "movies",
				element: <Movies />,
			},
			{
				path: "*",
				element: <h1>Page Not Found</h1>,
			},
			{
				path: "/not-logged-in",
				element: <h1>You Must Be Logged In To View This Page.</h1>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
