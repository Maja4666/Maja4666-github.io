
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
          <Route path='/' element={<PokemonList currentPage={currentPage} onPageChange={handlePageChange} loading={loading} />}/>
          <Route
            path="/Maja4666-github.io"
            element={<PokemonList currentPage={currentPage} onPageChange={handlePageChange} loading={loading} />}/>
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


