import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets//Logo.webp";

function App() {
  const targetTimeTimestamp = import.meta.env.VITE_TARGET_TIME;

  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [itsTime, setItsTime] = useState<boolean>(false);

  const calculateRemainingTime = () => {
    const targetTime = new Date(targetTimeTimestamp).getTime();
    const currentTime = new Date(Date.now()).getTime();

    const daysDifference = (targetTime - currentTime) / 1000 / 60 / 60 / 24;

    const { days, hours, minutes, seconds } = daysToDHMS(daysDifference);

    if (daysDifference > 0) {
      setTimeout(() => {
        setTimeRemaining(
          `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`
        );

        calculateRemainingTime();
      }, 1000);
    } else {
      setItsTime(true);
      setTimeRemaining(`FELIZ NAVIDAD A TODOS`);
    }
  };

  const daysToDHMS = (
    daysFloat: number
  ): { days: number; hours: number; minutes: number; seconds: number } => {
    let totalSeconds = Math.floor(daysFloat * 86400);

    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  // Fireworks effect
  const createFirework = () => {
    const colors = [
      "#64c8ff",
      "#96dcff",
      "#c8e6ff",
      "#fff",
      "#ffd700",
      "#ff6b9d",
    ];

    setTimeout(() => {      
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.2);

    const particles = 200;
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement("div");
      particle.className = "firework";
      particle.style.left = x + "px";
      particle.style.top = y + "px";

      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      particle.style.boxShadow = `0 0 10px ${color}`;

      const angle = (Math.PI * 2 * i) / particles;
      const velocity = 50 + Math.random() * 100;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      particle.style.setProperty("--x", tx + "px");
      particle.style.setProperty("--y", ty + "px");
      particle.style.animation = `firework-burst ${
        0.8 + Math.random() * 0.4
      }s ease-out forwards`;

      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 2000);
    }
    createFirework()
    }, 1000);
  }

  useEffect(() => {
    calculateRemainingTime();

    // Initial fireworks
    createFirework();
  }, []);

  return (
    <>
      <div className="container">
        <picture>
          <div className="logo_container">
            <img src={Logo} style={{ width: "100%" }} />
          </div>
        </picture>

        {!itsTime ? (
          <>
            <p className="center-text">SOLO FALTAN</p>

            <span id="countdown" className="center-text">
              {timeRemaining}
            </span>

            <p className="center-text"> PARA EL DESCANSO DE NAVIDAD</p>
          </>
        ) : (
          <span id="countdown" className="center-text">
            {timeRemaining}
          </span>
        )}
      </div>
    </>
  );
}

export default App;
