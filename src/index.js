import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';

import './styles/index.css';
import './styles/Navbar.css';

import Navbar from './components/Navbar';
// import Links from './components/Links';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
// import Animacion from './components/Animacion';




import Blog from './pages/blog/BlogList';
import BlogPost from './pages/blog/BlogPost';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLinksPaths = ['/about', '/projects', '/contact', '/blog'];
  const hideLinks = hideLinksPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Navbar />
      {/*{!hideLinks && <Links />}*/}
      {children}
      {/*<Animacion />*/}

    </>
  );
};
const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  </Layout>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Link to="/about">
      </Link>
      <Link to="/projects">
      </Link>
      <Link to="/contact">
      </Link>
    </BrowserRouter>
  </React.StrictMode>
);
