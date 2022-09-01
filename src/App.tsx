import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { MoviePage } from './components/MoviePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<MoviePage />} />
    </Routes>
  );
}

export default App;
