import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavFruitContext } from "../context/FavFruitContext";


const FavoriteFruit = ({ fruits }) => {
  const { favFruitId } = useContext(FavFruitContext);
  const fruit = fruits.find(el => el.id === favFruitId);

  return (
    <>
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${favFruitId}`}>{fruit.name}</Link>
    </>
  );
}

export default FavoriteFruit;
