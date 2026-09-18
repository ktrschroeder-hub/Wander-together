import { Link } from "react-router-dom";

export default function Porto() {
  return (
    <div className="england-page">

      <nav className="trip-nav">
        <Link to="/">🏠 Home</Link>
      </nav>

      <h1>🇵🇹 Porto</h1>

      <p>Our final week in Portugal.</p>

      <div className="info-grid">

        <div className="info-card">
          <h3>🏨 Stay</h3>
          <p>Coming soon...</p>
        </div>

        <div className="info-card">
          <h3>🍽 Food</h3>
          <p>Coming soon...</p>
        </div>

        <div className="info-card">
          <h3>🗺 Explore</h3>
          <p>Coming soon...</p>
        </div>

        <div className="info-card">
          <h3>🚇 Transportation</h3>
          <p>Coming soon...</p>
        </div>

      </div>

    </div>
  );
}