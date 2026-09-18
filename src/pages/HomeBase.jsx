import london from "../assets/images/London.jpeg";
import { Link } from "react-router-dom";

export default function HomeBase() {
  return (
    <div className="england-page">
      <header
        className="england-hero"
        style={{ backgroundImage: `url(${london})` }}
      >
        <div className="hero-overlay">
          <h1>🏠 Home Base</h1>
          <p>Residential & Cozy Home</p>
        </div>
      </header>

      <nav className="page-nav">
        <Link to="/">🏠 Wander Together</Link>
        <Link to="/england">🇬🇧 England</Link>
        <span className="current">🏡 Home Base</span>
      </nav>

      <section className="info-grid">
        <div className="info-card">
          <h3>📍 Address</h3>
          <p>
            Flat 10 Boston<br />
            Deals Gateway<br />
            London SE13 7RW
          </p>
        </div>

        <div className="info-card">
          <h3>📅 Stay</h3>
          <p>
            Check-in<br />
            Thursday, Sept 24 • 4:00 PM
          </p>

          <p>
            Check-out<br />
            Monday, Sept 28 • 11:00 AM
          </p>
        </div>
      </section>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Link to="/england">← Back to England</Link>
      </div>
    </div>
  );
}