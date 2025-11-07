import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Timer from "./componentes/Timer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#160F29] text-white">
      {/* Logos opcionales */}
      <div className="flex gap-6 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-6">Pomodoro Timer</h1>

      {/* Tu componente Timer */}
      <Timer workMinutes={25} breakMinutes={5} />

      {/* Contador opcional (de la plantilla original) */}
      <div className="card mt-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-[#246A73] px-4 py-2 rounded-lg hover:bg-[#368F8B]"
        >
          count is {count}
        </button>
      </div>

      <p className="read-the-docs mt-4">
        Edita <code>src/App.jsx</code> para personalizar tu aplicación
      </p>
    </div>
  );
}

export default App;
