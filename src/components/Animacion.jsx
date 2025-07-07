import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const InteractiveBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyDown = (e) => {
    setPosition((prev) => {
      const step = 20; // px por paso
      switch (e.key) {
        case "ArrowUp":
          return { ...prev, y: prev.y - step };
        case "ArrowDown":
          return { ...prev, y: prev.y + step };
        case "ArrowLeft":
          return { ...prev, x: prev.x - step };
        case "ArrowRight":
          return { ...prev, x: prev.x + step };
        default:
          return prev;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100 relative overflow-hidden">
      <motion.img
        src="/carrito.png"
        alt="Carrito"
        className="w-12 h-12"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute"
      >
        <rect x="10" y="10" width="100" height="100" fill="blue">
          <animate
            attributeName="x"
            from="-100"
            to="120"
            dur="10s"
            repeatCount="indefinite"
          />
        </rect>
      </motion.svg>
    </div>
  );
};
export default InteractiveBox;
