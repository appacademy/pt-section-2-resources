import { Outlet, NavLink } from 'react-router-dom';

const MovieNavBar = ({ movies }) => {
    return (
        <nav>
            <ul>
                {movies.map(({ id, title }) => (
                    <li key={id}>
                        <NavLink to={`${id}`}>{title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

function Movies({ movies }) {
    return (
        <div className="comp orange">
            <h1>Movies Component</h1>
            <MovieNavBar movies={movies} />
            <Outlet />
        </div>
    );
}

export default Movies;
