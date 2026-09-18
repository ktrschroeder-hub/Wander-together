import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import England from "./pages/England";
import HomeBase from "./pages/HomeBase";

import Today from "./pages/Today";
import Trove from "./pages/Trove.jsx";
import TravelHub from "./pages/TravelHub";
import Mystery from "./pages/Mystery";
import Porto from "./pages/Porto";

function Home() {
  const [timeRemaining, setTimeRemaining] = useState(() => getTimeRemaining());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <section className="hero">
        <div className="overlay">
          <p className="eyebrow">KT & Wade's Europe Adventure</p>
          <h1>Wander Together</h1>
          <p className="countdown">✈️ Leaving in {timeRemaining}</p>
        </div>
      </section>

      <section className="cards">

  <Link to="/england" className="card-link">
    <div className="card england">
      <span>🇬🇧</span>
      <h2>England</h2>
      <p>London • Greenwich</p>
    </div>
  </Link>

  <Link to="/mystery" className="card-link">
    <div className="card mystery">
      <span>🏖️</span>
      <h2>Mystery Trip</h2>
      <p>Your surprise adventure</p>
    </div>
  </Link>

  <Link to="/porto" className="card-link">
    <div className="card porto">
      <span>🇵🇹</span>
      <h2>Porto</h2>
      <p>Food • Wine • Ocean</p>
    </div>
  </Link>

  <Link to="/today" className="card-link">
    <div className="card today">
      <span>✨</span>
      <h2>Today's Todos</h2>
      <p>Weather • Plans • Schedule</p>
    </div>
  </Link>

  <Link to="/trove" className="card-link">
    <div className="card trove">
      <span>💎</span>
      <h2>Trove</h2>
      <p>Daily discoveries</p>
    </div>
  </Link>

  <Link to="/hub" className="card-link">
    <div className="card hub">
      <span>❤️</span>
      <h2>Travel Hub</h2>
      <p>Packing • Tickets • Apps</p>
    </div>
  </Link>

</section>
    </div>
  );
}

function getTimeRemaining() {
  const departure = new Date(2026, 8, 23, 22, 5, 0);
  const difference = departure.getTime() - Date.now();

  if (difference <= 0) {
    return "the adventure has started";
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/england" element={<England />} />
  <Route path="/england/home" element={<HomeBase />} />

  <Route path="/today" element={<Today />} />
  <Route path="/trove" element={<Trove />} />
  <Route path="/hub" element={<TravelHub />} />
  <Route path="/mystery" element={<Mystery />} />
  <Route path="/porto" element={<Porto />} />
</Routes>
  );
}