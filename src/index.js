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
import { useState } from "react"; // Asegúrate de importar useState
import PostForm from "./features/blog/components/PostForm";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [showPostForm, setShowPostForm] = useState(false);

  // Cambia esta contraseña por la que quieras
  const ADMIN_PASSWORD = "Oiluj...160289";

  const handleAddPostClick = () => {
    const input = prompt("Introduce la contraseña para crear un nuevo post:");
    if (input === ADMIN_PASSWORD) {
      setShowPostForm(true);
    } else if (input !== null) {
      alert("Contraseña incorrecta 🔒");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <main className="flex-grow flex flex-col lg:flex-row">
        <div className="lg:w-3/4 p-4 lg:p-8">{children}</div>

        {isHome && (
          <div className="sticky top-4 p-2 overflow-y-auto h-fit">
            <button
              className="mb-4 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleAddPostClick}
            >
              Agregar Post
            </button>

            <BlogList terminalMode={true} />

            {showPostForm && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-md relative">
                  <button
                    onClick={() => setShowPostForm(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold"
                  >
                    ✖
                  </button>

                  <PostForm closeModal={() => setShowPostForm(false)} />
                </div>
              </div>
            )}
          </div>
        )}
      </main>

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