import PokeMoveCard from './PokeMoveCard';
import { moves } from './data';

export default function PokeMoves() {
    return (
        <div>
            <h1>PokeMoves</h1>
            <ul>
                {moves.map((item) => (
                    <PokeMoveCard key={item.id} {...item} />

                    // <li key={item.id} className="poke-move-card">
                    //     <h3>Move {item.id}</h3>
                    //     <h4 style={{ padding: 10 }}>
                    //         {item.move.toUpperCase()}
                    //     </h4>
                    //     <p>Type: {item.type}</p>
                    //     <p>Level: {item.level}</p>
                    // </li>
                ))}
            </ul>
        </div>
    );
}
