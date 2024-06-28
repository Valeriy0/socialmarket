import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { Catalog } from './pages/catalog';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </Router>
  );
};
