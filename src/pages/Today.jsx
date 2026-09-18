import { Link } from "react-router-dom";

export default function Today() {
  return (
    <div className="england-page">
      <nav className="trip-nav">
        <Link to="/">🏠 Home</Link>
      </nav>
      <h1>✨ Today’s Todos</h1>
      <p>Weather, plans, and schedule.</p>
    </div>
  );
}