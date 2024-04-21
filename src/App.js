
import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetailsPage from './Pages/PokemonDetailsPage';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  return (
    <Router>
      <div className="App">
        <h1>Pokedex</h1>
        <Routes>
          <Route
            path="/"
            element={<PokemonList currentPage={currentPage} onPageChange={handlePageChange} loading={loading} />}/>
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




/*

import React, { useState , useEffect} from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Pagination from './components/Pagination';


function App() {
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePokemonClick = (pokemonUrl) => {
    setSelectedPokemonUrl(pokemonUrl);
  };

  const fetchPokemon = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokemon');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    const data = await fetchPokemon(page);
    setTotalPages(Math.ceil(data.count / 20));
  };

  useEffect(() => {
    handlePageChange(currentPage);
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonList currentPage={currentPage} onPageChange={handlePageChange} onPokemonClick={handlePokemonClick} loading={loading} />
      <PokemonDetails pokemonUrl={selectedPokemonUrl} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
*/
