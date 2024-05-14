import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to={"/form"}>Form</NavLink>
				</li>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
