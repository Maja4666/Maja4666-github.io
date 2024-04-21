// Pokedex.js
import React, { useEffect, useState } from 'react';
import { PokemonList } from './PokemonList';
import { Pagination } from './Pagination';
import { getPokemonList } from './utils';

export function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPokemon(currentPage);
  }, [currentPage]);

  const fetchPokemon = async (page) => {
    setLoading(true);
    const { results, count } = await getPokemonList(page);
    setPokemonData(results);
    setTotalPages(Math.ceil(count / 24));
    setLoading(false);
  };

  const handlePageChange = (page) => {
    console.log(`Changing page to ${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <PokemonList pokemonData={pokemonData} loading={loading} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
