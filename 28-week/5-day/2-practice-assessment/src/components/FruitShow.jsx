import { useParams } from "react-router-dom";

function FruitShow({ fruits }) {
	const { fruitId } = useParams();

	const currFruit = fruits.find((fruit) => fruit.id == fruitId);

	return (
		<main>
			<h2>{currFruit.name}</h2>
			<ul>
				<li>Color: {currFruit.color}</li>
				<li>Seeds: {currFruit.seeds}</li>
				<li>Sweetness: {currFruit.sweetness}</li>
			</ul>
		</main>
	);
}

export default FruitShow;
