import { Link } from 'react-router-dom';

function FruitsIndex({ fruits }) {
    return (
        <>
            <h2>Fruits Index</h2>

            <nav>
                {fruits.map((currFruit) => (
                    <Link key={currFruit.id} to={`/fruits/${currFruit.id}`}>
                        {currFruit.name}
                    </Link>
                ))}
            </nav>
        </>
    );
}

// function FruitsIndex({ fruits }) {
//     const fruitLinks = [];

//     for (let i = 0; i < fruits.length; i++) {
//         const currFruit = fruits[i];

//         fruitLinks.push(
//             <Link to={`/fruits/${currFruit.id}`}>{currFruit.name}</Link>
//         );
//     }

//     return (
//         <>
//             <h2>Fruits Index</h2>
//             <nav>{fruitLinks}</nav>
//         </>
//     );
// }

export default FruitsIndex;
