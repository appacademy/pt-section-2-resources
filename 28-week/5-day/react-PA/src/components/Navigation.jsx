import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/fruits/new">Enter a Fruit</NavLink>
                <NavLink to="/fav-fruit">Favorite Fruit</NavLink>
                <NavLink to="/set-fav-fruit">Set Favorite Fruit</NavLink>
            </ul>
        </nav>
    );
}

export default Navigation;
