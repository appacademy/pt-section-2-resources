import PokeMoveCard from "./PokeMoveCard";
import { moves } from "./data";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => {
          return (
            <PokeMoveCard key={item.id}  {...item}/>
          );
        })}
      </ul>
    </div>
  );
};

export default PokeMoves;
