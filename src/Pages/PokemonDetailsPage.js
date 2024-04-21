
import '../DetailPage.css'
import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

function PokemonDetailsPage() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch Pokemon details using the ID from the URL
    const fetchPokemonDetails = async () => {
      const pokemonId = window.location.pathname.split('/').pop(); 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      if (!response.ok) {
        console.error('Failed to fetch Pokemon details');
        return;
      }
      const data = await response.json();
      setPokemonDetails(data);
    };

    fetchPokemonDetails();
  }, []);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }


  return (
    <div className="pokemon-details">
      <h2>{pokemonDetails.name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`} alt={pokemonDetails.name} />
      <div>
        <h3>Type:</h3>
        <ul>
          {pokemonDetails.types ? pokemonDetails.types.map((type) => type.type.name).join(', ') : 'Unknown'}
        </ul>
        <h3>Abilities:</h3>
        <ul>
          {pokemonDetails.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <button className='details-button' onClick={() => navigate(`/`)}>Go Back</button>
    </div>
  );
}

export default PokemonDetailsPage;





