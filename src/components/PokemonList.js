import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';


function PokemonList({ onPageChange }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const limit = 24;
      const offset = (currentPage - 1) * limit;
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        if (!response.ok) throw new Error('Failed to fetch Pokemon');
        const data = await response.json();
        setTotalPages(Math.ceil(data.count / limit));
        const pokemonDetailsPromises = data.results.map((pokemon) =>
          fetchPokemonDetails(pokemon.url)
        );
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch Pokemon details');
    return await response.json();
  };

  return (
    <div className="pokemon-list">
      {loading ? <div>Loading...</div> : pokemonList.length > 0 ? (
        <div className="pokemon-cards-container">
          {pokemonList.map((pokemon, index) => (
            <div key={index} className="pokemon-card-wrapper">
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
        </div>
      ) : <div>No Pokemon found.</div>}
      <div className='page-next'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}

export default PokemonList;



