import { useRef, useEffect } from 'react';

export default function AnimacionCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Variables de animación
    let x = 50;
    const y = 100;
    const radius = 100;
    const speed = .5;
    let animationFrameId;

function dibujarPersonaje() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const pixelSize = 10;
  const colors = {
    skin: '#FFDBAC',
    shirt: '#2ECC71',
    pants: '#3498DB'
  };
  
  // Patrón de píxeles: [x, y, color]
  const pixels = [
    [2, 0, colors.skin], [3, 0, colors.skin], [4, 0, colors.skin],
    [1, 1, colors.skin], [2, 1, colors.skin], [3, 1, colors.skin], [4, 1, colors.skin], [5, 1, colors.skin],
    // ... más píxeles para completar el personaje
  ];
  
  pixels.forEach(([px, py, color]) => {
    ctx.fillStyle = color;
    ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize);
  });
}
    function animar() {
      x += speed;
      if (x > canvas.width + radius) {
        x = -radius;
      }
      dibujarPersonaje();
      animationFrameId = requestAnimationFrame(animar);
    }

    animar();

    // Cleanup function para cancelar la animación al desmontar
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
	<div className="text-center my-8"> {/* Contenedor */}
		<h2 className="text-2xl font-bold mb-6 bg-red-800 p-4 rounded-lg">
		Animación de Círculo
		</h2>
		<canvas
		  ref={canvasRef}
		  width={1000}  // Resolución interna (píxeles)
		  height={600} // Resolución interna
		  className="block w-full h-[600px] mx-auto bg-red-100" // Tamaño visual
		/>
    </div>
  );
}