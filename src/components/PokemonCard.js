
import '../App.css';
import { getTypeColor } from './utils';
import React from 'react';
import { Link } from 'react-router-dom';


function PokemonCard({ pokemon }) {
  const backgroundColor = getTypeColor(pokemon.types);

  return (
    <div className="pokemon-card" style={{ backgroundColor }}>
    <Link to={`/pokemon/${pokemon.id}`} >
      <h3>{pokemon.name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <p>Type: {pokemon.types ? pokemon.types.map((type) => type.type.name).join(', ') : 'Unknown'}</p>
    </Link>
    </div>
  );
}

export default PokemonCard;

