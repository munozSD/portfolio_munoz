import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import './styles/index.css';
import './styles/components/_Navbar.module.css';
import Navbar from './components/layout/Navbar';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Projects from './components/portfolio/Projects';
import Home from './pages/home/Home';
import CV_Web from './components/portfolio/CV_Web';
import Animacion from './components/animations/Animacion';
import SkillBar from './components/ui/SkillBar/SkillBar';
import BlogList from './features/blog/pages/BlogList';
import BlogPost from './features/blog/pages/BlogPost';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ChatbotButton from './components/ChatBot/ChatBot';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
<div className="flex flex-col min-h-screen bg-gray-900">
  <Navbar />
  
  <main className="flex-grow flex flex-col lg:flex-row">
    {/* Contenido principal (ocupa 3/4 del espacio) */}
    <div className="lg:w-3/4 p-4 lg:p-8">
      {children}
    </div>
    
    {/* Sidebar derecha (BlogList) - ocupa 1/4 del espacio */}
    {isHome && (
      <div className="sticky top-4 p-2 overflow-y-auto h-fit">
          <h2></h2>
          <BlogList terminalMode={true} />
      </div>
    )}
  </main>
  
  {/* SkillBar al final */}
  {isHome && <SkillBar />}
  
  <WhatsAppButton />
  <ChatbotButton />
</div>
  );
};

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/BlogList" element={<BlogList />} />
      <Route path="/BlogPost/:id" element={<BlogPost />} />
      <Route path="/CV_Web" element={<CV_Web />} />
    </Routes>
  </Layout>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);