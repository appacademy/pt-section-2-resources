import bulby from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };
  return (
    <div>
      <h1>{favPokemon}&apos;s Showcase Component</h1>
      <img src={bulby} alt="bulbasaur pic" />
      <h2>
        {favPokemon}&apos;s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is <span style={{backgroundColor: '#fff', color: "green"}}>{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
