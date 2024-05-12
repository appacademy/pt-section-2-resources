import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
	return (
		<nav>
			<h1>Galleries</h1>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				{galleries.map((gallery) => (
					<li key={gallery.id}>
						<NavLink to={`galleries/${gallery.id}`}>
							{gallery.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default GalleryNavigation;
