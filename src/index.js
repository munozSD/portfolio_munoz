import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/Navbar.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Console from './components/Console';
import Navbar from "./components/Navbar";
import ComponenteXpl from "./components/ComponenteXpl";
import Links from "./components/Links";
import Button from "./components/Button";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Links />
    {/*<ComponenteXpl />*/}
    {/*<App />*/}
    {/*<Button />*/}
        <Contact />

  </React.StrictMode>
);
reportWebVitals();
// JulioMuñozDev @DESKTOP-C2CB72L MINGW64 ~