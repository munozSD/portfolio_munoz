import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/Navbar.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Console from './components/Console';
import Navbar from "./components/Navbar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Navbar />
    <App />
    <div class="container"></div>
  </React.StrictMode>
);
reportWebVitals();
