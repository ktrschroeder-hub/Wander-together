import { Link } from "react-router-dom";

export default function Trove() {
  return (
    <div className="england-page">
      <nav className="trip-nav">
        <Link to="/">🏠 Home</Link>
      </nav>

      <h1>💎 Trove</h1>

      <p>Collect the best moments from each day.</p>
    </div>
  );
}