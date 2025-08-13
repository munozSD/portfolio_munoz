import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../../features/blog/pages/BlogList';
import Typewriter from 'react-typewriter-effect';


const Try = () => {
  return (
      <div className="text-blue-500 text-4xl"> {/* Usa Tailwind o clase CSS */}
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
          cursorColor="#000"
          multiTextLoop={true}
        />
      </div>
      <div className="bg-black p-4 rounded-lg">
        <Typewriter
          textStyle={{ 
            background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold'
          }}
          cursorColor="#00ffff"
          multiText={['DESARROLLADOR FULLSTACK', 'REACT NINJA', 'CODE ARTIST']}
        />
      </div>
      <div className="bg-yellow-100 p-4">
        <Typewriter
          textStyle={{ color: '#ff5e00', fontWeight: '800' }}
          cursorColor="#ff0000"
          multiText={['Innovador', 'Creador', 'Visionario']}
        />
      </div>
      <div className="bg-green-900 p-6 rounded-xl">
        <Typewriter
          textStyle={{ 
            color: '#b388ff',
            textShadow: '0 0 8px #7c4dff'
          }}
          cursorColor="#e100ff"
          multiText={['JavaScript', 'TypeScript', 'Node.js']}
        />
      </div>
      <div className="bg-black p-3">
        <Typewriter
          textStyle={{ color: '#39ff14', fontFamily: 'monospace' }}
          cursorColor="#39ff14"
          multiText={['Backend', 'Frontend', 'DevOps']}
        />
      </div>
      <div className="bg-black p-6 font-mono text-center">
        <Typewriter
          textStyle={{
            background: 'linear-gradient(90deg, #ff00cc, #3333ff)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
          cursorColor="#00ffcc"
          multiText={['FullStack Developer', 'React Specialist', 'Tech Enthusiast']}
          multiTextLoop={true}
        />
      </div>
    </div>
  );
};

export default Links;