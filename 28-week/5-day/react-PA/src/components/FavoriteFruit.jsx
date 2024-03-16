import { useFruitContext } from '../context/FavFruitContext';
import { Link } from 'react-router-dom';

const FavoriteFruit = ({ fruits }) => {
    const { favFruitId } = useFruitContext();

    const favFruit = fruits.find((el) => el.id === favFruitId);

    return (
        <>
            <h2>Favorite Fruit</h2>
            <Link to={`/fruits/${favFruitId}`}>{favFruit.name}</Link>
        </>
    );
};

export default FavoriteFruit;
