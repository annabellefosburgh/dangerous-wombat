// TEMPORARY INDEX.JS TO TEST FLASHCARD PAGE //

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Flashcard from './pages/Flashcard.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/flashcards" element={<Flashcard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);