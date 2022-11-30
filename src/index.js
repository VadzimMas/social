import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Container from './components/Container/Container';
import './scripts/adaptiveVH.js'; // set viewport height for different browsers
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderApp = () => {
  root.render(
    <BrowserRouter>
      <Container
        store={store}
      />
    </BrowserRouter >
  );
}
renderApp()



