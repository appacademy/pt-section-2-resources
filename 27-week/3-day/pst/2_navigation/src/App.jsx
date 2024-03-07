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

function Layout() {
    return (
        <div className="app">
            <h1>App Component</h1>
            <nav className="comp nav">
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'purple' : ''
                            }
                            style={({ isActive }) =>
                                isActive
                                    ? { fontWeight: 'bold' }
                                    : { fontStyle: 'italic' }
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'purple' : ''
                            }
                            style={({ isActive }) =>
                                isActive
                                    ? { fontWeight: 'bold' }
                                    : { fontStyle: 'italic' }
                            }
                            to="/stocks"
                        >
                            Stocks
                        </NavLink>
                    </li>
                    <li>
                        <a href="/movies">Movies with anchaaa</a>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

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
                element: <h1>You must be logged in {'>:('}</h1>,
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

// const MyGreenBoldNavLinks = ({ text, to }) => {
//     return (
//         <NavLink
//             className={({ isActive }) => (isActive ? 'green' : '')}
//             style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : {})}
//             to={to}
//         >
//             {text}
//         </NavLink>
//     );
// };

// function Layout() {
//     return (
//         <div className="app">
//             <h1>App Component</h1>
//             <nav className="comp nav">
//                 <ul>
//                     <li>
//                         <MyGreenBoldNavLinks to="/" text="Home" />
//                     </li>
//                     <li>
//                         <MyGreenBoldNavLinks text="Stocks" to="/stocks" />
//                     </li>
//                     <li>
//                         <a href="/movies">Movies with anchaaa</a>
//                     </li>
//                 </ul>
//             </nav>
//             <main>
//                 <Outlet />
//             </main>
//         </div>
//     );
// }
