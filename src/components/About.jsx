import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-slate-900 flex flex-col items-center selection:bg-yellow-300 selection:text-red-700">
      <div className="w-full max-w-7xl p-8">
        <h1 className="text-white text-4xl font-bold text-center italic mb-10">
          SOBRE MÍ
        </h1>
        <p className="text-white text-center w-4/5 mx-auto text-lg">
          Hola, soy Julio Muñoz, un desarrollador web apasionado por la creación de experiencias digitales interactivas y funcionales. Mi interés por la tecnología comenzó hace varios años, cuando descubrí el mundo de la programación y el desarrollo web. Desde entonces, me he dedicado a aprender y perfeccionar mis habilidades en diversas tecnologías como JavaScript, React, Node.js, y CSS.
          <br /><br />
          Mi objetivo es crear aplicaciones que no solo sean funcionales, sino también visualmente atractivas y fáciles de usar. Me encanta resolver problemas complejos mediante soluciones elegantes y escalables. Siempre busco estar al tanto de las últimas tendencias en desarrollo web y seguir aprendiendo nuevas herramientas y lenguajes para mejorar mis habilidades.
          <br /><br />
          En mis proyectos, pongo especial énfasis en la usabilidad, accesibilidad y la optimización del rendimiento. Además de mi experiencia técnica, disfruto trabajando en equipo y colaborando en proyectos multidisciplinarios donde puedo aportar ideas creativas y aprender de otros profesionales.
          <br /><br />
          Cuando no estoy programando, me gusta explorar nuevas tecnologías, lewer sobre innovación digital y compartir conocimientos con otros desarrolladores. También disfruto de actividades como el senderismo, la fotografía y el cine.
          <br /><br />
          Si estás buscando un desarrollador web entusiasta, detallista y siempre dispuesto a aprender, no dudes en contactarme.
        </p>
      </div>
    </div>
  );
};

export default About;
