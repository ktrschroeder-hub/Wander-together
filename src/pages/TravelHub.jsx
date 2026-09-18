import { Link } from "react-router-dom";

export default function TravelHub() {
  return (
    <div className="england-page">
      <nav className="trip-nav">
        <Link to="/">🏠 Home</Link>
      </nav>
      <h1>❤️ Travel Hub</h1>
      <p>Packing, tickets, and apps.</p>
    </div>
  );
}