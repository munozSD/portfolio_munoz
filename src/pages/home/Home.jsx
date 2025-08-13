import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'react-typewriter-effect';

const HomeTerminal = () => {
  return (
    <div className="min-h-screen w-full bg-black text-green-400 font-mono p-4 md:p-8">
      {/* Encabezado tipo terminal */}
      <div className="border-b border-green-500 pb-2 mb-6">
        <p className="text-gray-400">user@portfolio:~$ <span className="text-green-400">start_portfolio.sh</span></p>
      </div>

      {/* Typewriter effect */}
      <div className="text-blue-400 text-xl md:text-2xl mb-8">
        <Typewriter
          multiText={[
            'Desarrollador de software',
            'Especialista en React',
            'Full Stack Developer',
            'Apasionado por la tecnología'
          ]}
          multiTextDelay={1000}
          typeSpeed={100}
          eraseSpeed={50}
          cursorColor="#3b82f6"
          multiTextLoop={true}
        />
      </div>

      {/* Sección About Me */}
      <div className="mb-8 terminal-section">
        <p className="text-yellow-400 mb-2">$ cat about_me.txt</p>
        <div className="ml-4">
          <p><span className="text-cyan-400">Nombre:</span> Julio Muñoz</p>
          <p><span className="text-cyan-400">Rol:</span> Full Stack Developer</p>
          <p><span className="text-cyan-400">Stack:</span> React, Node.js, PHP, MySQL</p>
        </div>
      </div>

      {/* Sección Skills */}
      <div className="mb-8 terminal-section">
        <p className="text-yellow-400 mb-2">$ ./skills.sh</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-4">
          {['React', 'Node.js', 'PHP', 'MySQL', 'Tailwind', 'Git', 'Docker', 'AWS'].map((skill) => (
            <span key={skill} className="bg-gray-800 text-green-300 px-3 py-1 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Sección Blog */}
      <div className="mb-8 terminal-section">
        <p className="text-yellow-400 mb-2">$ ls -l ./blog_posts/</p>
        <div className="ml-4 space-y-1">
          {[
            { title: 'Inteligencia_Artificial.md', date: '2024-06-15' },
            { title: 'React_Tips.md', date: '2024-05-20' },
            { title: 'Backend_Best_Practices.txt', date: '2024-04-10' }
          ].map((post, index) => (
            <div key={index} className="flex justify-between hover:bg-gray-800 px-2 py-1 rounded">
              <span className="text-white">-rw-r--r-- 1 user group {post.title}</span>
              <span className="text-gray-400 text-sm">{post.date}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 ml-4">
          <p>$ <Link to="/BlogList" className="text-blue-400 hover:underline">cd ../all_posts</Link></p>
        </div>
      </div>

      {/* Comandos disponibles */}
      <div className="terminal-section">
        <p className="text-yellow-400 mb-2">$ ./available_commands.sh</p>
        <ul className="ml-4 space-y-1">
          <li>
            <Link to="/about" className="text-cyan-400 hover:underline">about_me</Link> - Información detallada sobre mí
          </li>
          <li>
            <Link to="/projects" className="text-cyan-400 hover:underline">show_projects</Link> - Mis proyectos destacados
          </li>
          <li>
            <Link to="/contact" className="text-cyan-400 hover:underline">send_message</Link> - Contáctame directamente
          </li>
          <li>
            <Link to="/cv" className="text-cyan-400 hover:underline">view_cv</Link> - Ver mi currículum profesional
          </li>
        </ul>
      </div>

      {/* Footer de terminal */}
      <div className="mt-8 pt-4 border-t border-green-500 text-sm text-gray-400">
        <p>Presiona <span className="text-yellow-400">[TAB]</span> para autocompletar comandos</p>
        <p>Para salir, escribe <span className="text-yellow-400">exit</span> o cierra la ventana</p>
        
        {/* Botón de advertencia estilo terminal */}
        <div className="mt-4 p-2 bg-red-900/30 border border-red-700 rounded text-red-300 font-mono text-xs flex items-start">
          <span className="mr-2">⚠</span>
          <div>
            <p className="font-bold">ADVERTENCIA:</p>
            <p>Esta no es una terminal real. Versión simulada para fines demostrativos.</p>
            <p className="mt-1 text-red-200">No introduzca comandos sensibles o información personal.</p>
          </div>
        </div>

        {/* Alternativa con estilo de comando fallido */}
        <div className="mt-3 p-2 bg-black border border-red-500 text-red-400 font-mono">
          <p>$ <span className="text-white">sudo rm -rf /</span></p>
          <p className="mt-1">> <span className="text-red-300 blink">Error: Comando no permitido en entorno simulado</span></p>
        </div>
      </div>
    </div>
  );
};

export default HomeTerminal;