import { useFavorite } from "../context/FavFruitContext";
import { Link } from "react-router-dom";

const FavoriteFruit = ({ fruits }) => {
	const { favFruitId } = useFavorite();

	const currFruit = fruits.find((fruit) => fruit.id === favFruitId);

	return (
		<main>
			<h2>Favorite Fruit</h2>
			<Link to={`/fruits/${currFruit.id}`}>{currFruit.name}</Link>
		</main>
	);
};

export default FavoriteFruit;
