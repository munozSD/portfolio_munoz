import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/Navbar.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Console from './components/Console';
import Navbar from "./components/Navbar";
import ComponenteXpl from "./components/ComponenteXpl";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Navbar />
    <App />
    <ComponenteXpl />
  </React.StrictMode>
);
reportWebVitals();
