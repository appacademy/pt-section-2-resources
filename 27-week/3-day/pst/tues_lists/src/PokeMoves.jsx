import { moves } from './data';
import PokeMoveCard from './PokeMoveCard';

export default function PokeMoves() {
    return (
        <div>
            <h1>PokeMoves</h1>
            <ul>
                {moves.map((item) => (
                    // <PokeMoveCard key={item.id} item={item}/>
                    <PokeMoveCard key={item.id} {...item} />
                    // <li key={item.id}>
                    //     {item.id}. {item.move}
                    // </li>
                ))}
            </ul>
        </div>
    );
}
