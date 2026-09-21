import { Link } from "react-router-dom";
import mysteryHero from "../assets/images/journeyktand wade.jpeg";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#101820",
    color: "#f8fafc",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  date: {
    display: "none",
  },
  hero: {
    minHeight: "230px",
    backgroundImage: `url(${mysteryHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "1.25rem",
  },
  overlay: {
    width: "100%",
    minHeight: 0,
    padding: "2.5rem 1.25rem 1rem",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "16px",
    textAlign: "center",
    transform: "translateY(-10px)",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    padding: "12px 16px",
    background: "#0c141c",
    textAlign: "center",
    top: 0,
    zIndex: 20,
    borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
  },
  navLink: {
    textDecoration: "none",
    color: "#e2e8f0",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(148,163,184,0.22)",
    padding: "9px 14px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "0.82rem",
    boxShadow: "0 8px 18px rgba(15,23,32,0.18)",
  },
  section: {
    maxWidth: "1100px",
    margin: "26px auto",
    padding: "0 16px 24px",
  },
  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
    alignItems: "start",
  },
  card: {
    borderRadius: "22px",
    padding: "20px 18px 18px",
    marginBottom: "18px",
    minHeight: "104px",
    border: "1px solid rgba(148,163,184,0.14)",
    boxShadow: "0 18px 40px rgba(15, 23, 32, 0.22)",
  },
  activeCard: {
    background: "#45D3B3",
    color: "#24102d",
  },
  flightCard: {
    background: "#FFCB22",
    color: "#24102d",
  },
  lockedCard: {
    background: "#cdb6d9",
    color: "#24102d",
  },
  sectionTitle: {
    margin: "0 0 16px",
    display: "inline-flex",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "rgba(36,16,45,.16)",
    border: "1px solid rgba(255,255,255,.24)",
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#24102d",
  },
  linkedTitle: {
    margin: 0,
    display: "inline-flex",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "rgba(36,16,45,.16)",
    border: "1px solid rgba(255,255,255,.24)",
    color: "#24102d",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: 800,
  },
  locked: {
    display: "inline-block",
    marginTop: "12px",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "#24102d",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,.35)",
    fontSize: ".85rem",
    fontWeight: 700,
  },
};

export default function Mystery() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={{ margin: 0, color: "#ffffff", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900 }}>
            Mystery Trip
          </h1>
          <p style={{ margin: 0, color: "#f8fafc", fontSize: "1.15rem", fontWeight: 700 }}>
            Tuesday, September 29 – Friday, October 9
          </p>
        </div>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>✈️ Wander2Gether</Link>
        <a href="https://www.weather.com" target="_blank" rel="noreferrer" style={styles.navLink}>🌤 Weather</a>
        <a href="https://translate.google.com" target="_blank" rel="noreferrer" style={styles.navLink}>💬 Translate</a>
        <a href="https://www.bbc.com/news" target="_blank" rel="noreferrer" style={styles.navLink}>📰 News</a>
        <a href="https://www.xe.com/currencyconverter/" target="_blank" rel="noreferrer" style={styles.navLink}>💱 Currency</a>
        <Link to="/" style={styles.navLink}>⭐ KT & Wade</Link>
      </nav>

      <main style={styles.section}>
        <div style={styles.dashboardGrid}>
          <section style={{ ...styles.card, ...styles.flightCard }}>
            <h2 style={styles.sectionTitle}>✈️ Flight out</h2>
            <strong>Tuesday, September 29, 2026 · 07:05</strong>
            <p>London Gatwick North Terminal</p>
          </section>

          <section style={{ ...styles.card, ...styles.flightCard }}>
            <h2 style={styles.sectionTitle}>🛬 Flight home</h2>
            <strong>Friday, October 9, 2026 · 14:35</strong>
            <p>London Gatwick South Terminal</p>
          </section>

          <section style={{ ...styles.card, ...styles.activeCard }}>
            <a href="https://passport.journeetrips.com/trips/xh6sgwmhzv/" target="_blank" rel="noreferrer" style={styles.linkedTitle}>
              🗺 Journee Itinerary
            </a>
          </section>

          <section style={{ ...styles.card, ...styles.activeCard }}>
            <a href="https://explorers.journeetrips.com/weather/v2/2026-09-29/xh6sgwmhzvjj/forecast.html" target="_blank" rel="noreferrer" style={styles.linkedTitle}>
              🌤 Weather
            </a>
          </section>
        </div>

        <section style={{ ...styles.card, ...styles.lockedCard }}>
          <h2 style={styles.sectionTitle}>🔒 Trip resources</h2>
          <p>These details will unlock as your trip gets closer.</p>
          <div style={{ display: "grid", gap: "12px" }}>
            <div><strong>🗺 Best sites to see</strong><br /><span>Curated Google Maps list. Tap “follow” when available.</span><br /><span style={styles.locked}>Unlocks 1 day before your trip</span></div>
            <div><strong>🍽 Best places to eat</strong><br /><span>Curated Google Maps list. Tap “follow” when available.</span><br /><span style={styles.locked}>Unlocks 1 day before your trip</span></div>
            <div><strong>📄 Digital documents</strong><br /><span>Digital copies for when you’re on the go.</span><br /><span style={styles.locked}>Unlocks 1 day before your trip</span></div>
            <div><strong>🎫 Return boarding pass</strong><br /><span>Download it to your phone and sail through security.</span><br /><span style={styles.locked}>Unlocks 6 hours before your flight</span></div>
            <div><strong>📞 Your trip contacts</strong><br /><span>Useful phone numbers during your trip.</span><br /><span style={styles.locked}>Unlocks when your flight takes off</span></div>
          </div>
        </section>
      </main>
    </div>
  );
}