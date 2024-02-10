import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';
import CreatePokemonForm from './CreatePokemonForm';
import Fab from './Fab';
import { getPokemon } from '../store/pokemon';



const PokemonBrowser = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();
  const allPokemon = useSelector(state => state.pokemon);
  const pokemon = allPokemon.list.map(pokemonId => allPokemon[pokemonId]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getPokemon())
  }, [dispatch])


  return (
    <main>
      <nav>
        <Fab hidden={showForm} onClick={() => setShowForm(true)} />
        {pokemon.map((pokemon) => {
          return (
            <NavLink key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
              <div
                className={
                  Number.parseInt(pokemonId) === pokemon.id
                    ? "nav-entry is-selected"
                    : "nav-entry"
                }
              >
                <div
                  className="nav-entry-image"
                  style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
                ></div>
                <div>
                  <div className="primary-text">{pokemon.name}</div>
                  <div className="secondary-text">
                    {pokemon.number} {pokemon.captured && "(Captured)"}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
      {showForm ? (
        <CreatePokemonForm hideForm={() => setShowForm(false)} />
      ) : (
        pokemonId ? <PokemonDetail/> : null
      )}
    </main>
  );
};

export default PokemonBrowser;
