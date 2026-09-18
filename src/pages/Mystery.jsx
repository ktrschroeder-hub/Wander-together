import { Link } from "react-router-dom";

export default function Mystery() {
  return (
    <div className="england-page">
      <nav className="trip-nav">
        <Link to="/">🏠 Home</Link>
      </nav>
      <h1>🧭 Mystery Trip</h1>
      <p>Your surprise adventure.</p>
    </div>
  );
}