import { useState, useEffect } from "react";

export default function Timer({ workMinutes = 25, breakMinutes = 5 }) {
  const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, SetMode] = useState("work");

  useEffect(() => {
    let timer = null;

    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      handleModeSwitch();
    }

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  // Cambiar entre trabajo y descanso
  const handleModeSwitch = () => {
    setIsRunning(false);
    if (mode === "work") {
      SetMode("break");
      setSecondsLeft(breakMinutes * 60);
    } else {
      SetMode("work");
      setSecondsLeft(workMinutes * 60);
    }
  };

  // Controladores
  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    SetMode("work");
    setSecondsLeft(workMinutes * 60);
  };

  // Formatear tiempo (mm:ss)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#f3dfc1] rounded-2xl shadow-md w-80">
      <h2
        className={`text-xl font-bold mb-2 ${
          mode === "work" ? "text-[#004439]" : "text-[#592f0f]"
        }`}
      >
        {mode === "work" ? "Tiempo de Trabajo" : "Tiempo de Descanso"}
      </h2>

      <h1 className="text-5xl font-bold mb-6">{formatTime(secondsLeft)}</h1>

      <div className="flex gap-3">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="bg-[#004439] text-white px-4 py-2 rounded-lg hover:bg-[#0a5e5b]"
          >
            Iniciar
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="bg-[#592f0f] text-white px-4 py-2 rounded-lg hover:bg-[#3d1a00]"
          >
            Pausar
          </button>
        )}
        <button
          onClick={handleReset}
          className="bg-[#592f0f] text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
