import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </HashRouter>
);