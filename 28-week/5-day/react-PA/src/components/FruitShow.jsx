import { useParams } from 'react-router-dom';

function FruitShow({ fruits }) {
    const { fruitId } = useParams();

    const { name, color, sweetness, seeds } = fruits.find(
        (el) => el.id === fruitId
    );

    return (
        <>
            <h2>{name}</h2>
            <div>{color}</div>
            <div>Sweetness: {sweetness}</div>
            <div>Seeds: {seeds}</div>
        </>
    );
}

export default FruitShow;
