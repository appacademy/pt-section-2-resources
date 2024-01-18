import bulby from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeChars = {
    type: "Grass",
    move: "Vine Whip",
  };
  return (
    <div>
      <h1>{favPokemon}&apos;s Showcase Component</h1>
      <img src={bulby} alt="bulbasaur picture" />
      <h2>
        {favPokemon}&apos;s type is <span style={{backgroundColor: "green", color: "white"}}>{pokeChars.type}</span> and one of their moves is{" "}
        <span style={{backgroundColor: "#fff", color: "green"}}>{pokeChars.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
