import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Container from './components/Container/Container';
import './scripts/adaptiveVH.js'; // set viewport height for different browsers
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Container />
  </BrowserRouter>
);



