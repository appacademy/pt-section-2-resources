import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    // Link,
    NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

const Layout = () => {
    return (
        <div className="app">
            <h1>App Component</h1>
            <nav className="comp nav">
                <ul>
                    <li>
                        <NavLink
                            style={({ isActive }) => {
                                if (isActive === true)
                                    return { fontWeight: 'bold' };
                                else return { fontStyle: 'italic' };
                            }}
                            className={({ isActive }) =>
                                isActive ? 'purple' : ''
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => {
                                if (isActive === true)
                                    return { fontWeight: 'bold' };
                                else return { fontStyle: 'italic' };
                            }}
                            className={({ isActive }) =>
                                isActive ? 'purple' : ''
                            }
                            to="/stocks"
                        >
                            Stocks
                        </NavLink>
                    </li>
                    <li>
                        <a href="/movies">Movies with an anchaaa</a>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'stocks',
                element: <Stocks />,
            },
            {
                path: 'movies',
                element: <Movies />,
            },
            {
                path: '/not-logged-in',
                element: <h1>You Must Be Logged In To Enter.</h1>,
            },
            {
                path: '*',
                element: <h1>Page Not Found</h1>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
