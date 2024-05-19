import { useFavorite } from "../context/FavFruitContext";

const SetFavoriteFruit = ({ fruits }) => {
	const { favFruitId, setFavFruitId } = useFavorite();

	const handleSelect = (e) => setFavFruitId(e.target.value);

	return (
		<div className="set-fav-fruit">
			<h2>Select your Favorite Fruit</h2>
			<label>
				<select value={favFruitId} onChange={handleSelect}>
					{fruits.map((fruit) => (
						<option key={fruit.id} value={fruit.id}>
							{fruit.name}
						</option>
					))}
				</select>
			</label>
		</div>
	);
};

export default SetFavoriteFruit;
