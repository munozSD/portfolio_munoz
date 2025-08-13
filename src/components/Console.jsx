import React, { useState } from "react";

const WebConsole = () => {
  const [logs, setLogs] = useState([""]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();

    const newLogs = [...logs, `> ${input}`];

    // Simular ejecución de comandos (puedes expandir esta lógica)
    if (input === "help") {
      newLogs.push("Comandos disponibles: help, about, clear");
    } else if (input === "about") {
      newLogs.push("Consola desarrollada por xjm 🚀");
    } else if (input === "clear") {
      setLogs([]);
      setInput("");
      return;
    } else {
      newLogs.push(`Comando no reconocido: ${input}`);
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <div className="bg-black text-green-400 ml-4 font-mono p-5 h-screen overflow-auto width-10 w-[50%] h-[5%]">
      <div>
        {logs.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <form onSubmit={handleCommand} className="mt-4 flex">
        <span className="mr-2">xjm@xjm:$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className="bg-black text-green-400 outline-none border-none flex-1 w-[50%] h-[5%]"
        />
      </form>
    </div>
  );
};

export default WebConsole;
