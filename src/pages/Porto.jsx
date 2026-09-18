import { Link } from "react-router-dom";
import portoHero from "../assets/images/Portohero.jpeg";

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(30,41,59,0.9), rgba(15,23,32,1) 42%)",
    color: "#f8fafc",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  hero: {
    minHeight: "360px",
    backgroundImage: `url(${portoHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "1.25rem",
  },
  overlay: {
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(15,23,32,0), rgba(15,23,32,.82))",
    padding: "2.5rem 1.25rem 1rem",
    textAlign: "center",
    transform: "translateY(-18px)",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    padding: "12px 16px",
    background: "rgba(15, 23, 32, 0.9)",
    position: "sticky",
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
  card: {
    borderRadius: "22px",
    padding: "20px 18px 18px",
    marginBottom: "18px",
    border: "1px solid rgba(148,163,184,0.14)",
    boxShadow: "0 18px 40px rgba(15, 23, 32, 0.22)",
  },
  stayCard: {
    background:
      "linear-gradient(180deg, rgba(14,116,144,0.38), rgba(15,23,42,0.98))",
  },
  transitCard: {
    background:
      "linear-gradient(180deg, rgba(124,58,237,0.38), rgba(15,23,42,0.98))",
  },
  foodCard: {
    background:
      "linear-gradient(180deg, rgba(190,24,93,0.38), rgba(15,23,42,0.98))",
  },
  exploreCard: {
    background:
      "linear-gradient(180deg, rgba(202,138,4,0.38), rgba(15,23,42,0.98))",
  },
  sectionTitle: {
    margin: "0 0 16px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.3)",
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#f8fafc",
  },
  stayRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },
  stayTitle: {
    margin: 0,
    fontSize: "1.05rem",
    fontWeight: 800,
    color: "#f8fafc",
  },
  stayAddress: {
    fontSize: "0.72rem",
    color: "#dbeafe",
    whiteSpace: "nowrap",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
    gap: "10px",
    marginTop: "14px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(254,215,170,0.95))",
    color: "#0f172a",
    textDecoration: "none",
    padding: "11px 12px",
    borderRadius: "14px",
    fontWeight: 800,
    fontSize: "0.9rem",
    border: "1px solid rgba(148,163,184,0.35)",
    boxShadow: "0 12px 24px rgba(234,88,12,0.14)",
  },
};

export default function Porto() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.overlay}>
          <h1
            style={{
              fontSize: "clamp(3.4rem, 8vw, 5.5rem)",
              lineHeight: 0.95,
              margin: 0,
              fontWeight: 900,
              color: "#ffffff",
              textShadow: "0 3px 18px rgba(0,0,0,0.8)",
            }}
          >
            🇵🇹 Porto
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              margin: "16px 0 0",
              fontWeight: 700,
              color: "#f8fafc",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            Our final week in Portugal
          </p>
        </div>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>✈️ Wander2Gether</Link>
        <a href="https://www.weather.com/weather/today/l/Porto+Portugal" target="_blank" rel="noreferrer" style={styles.navLink}>🌤 Weather</a>
        <a href="https://translate.google.com" target="_blank" rel="noreferrer" style={styles.navLink}>💬 Translate</a>
        <a href="https://www.theportugalnews.com" target="_blank" rel="noreferrer" style={styles.navLink}>📰 News</a>
        <a href="https://www.xe.com/currencyconverter/" target="_blank" rel="noreferrer" style={styles.navLink}>💱 Currency</a>
        <Link to="/" style={styles.navLink}>⭐ KT & Wade</Link>
      </nav>

      <main style={styles.section}>
        <section style={{ ...styles.card, ...styles.stayCard }}>
          <h2 style={styles.sectionTitle}>🏡 Stay</h2>
          <div style={styles.stayRow}>
            <p style={styles.stayTitle}>Porto Home</p>
            <span style={styles.stayAddress}>Stay details coming soon</span>
          </div>
          <div style={styles.buttonGrid}>
            <a href="https://www.airbnb.com/s/Porto--Portugal" target="_blank" rel="noreferrer" style={styles.button}>🏨 Airbnb</a>
            <a href="https://maps.google.com/?q=Porto+Portugal" target="_blank" rel="noreferrer" style={styles.button}>📍 Google Maps</a>
          </div>
        </section>

        <section style={{ ...styles.card, ...styles.transitCard }}>
          <h2 style={styles.sectionTitle}>🚇 Transit</h2>
          <div style={styles.buttonGrid}>
            <a href="https://www.metrodoporto.pt" target="_blank" rel="noreferrer" style={styles.button}>Metro do Porto</a>
            <a href="https://www.stcp.pt" target="_blank" rel="noreferrer" style={styles.button}>STCP Buses</a>
            <a href="https://www.rome2rio.com/map/Porto" target="_blank" rel="noreferrer" style={styles.button}>Rome2Rio</a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={styles.button}>Google Maps</a>
          </div>
        </section>

        <section style={{ ...styles.card, ...styles.foodCard }}>
          <h2 style={styles.sectionTitle}>🍽 Food</h2>
          <div style={styles.buttonGrid}>
            <a href="https://guide.michelin.com/en/pt/porto-region/porto/restaurants" target="_blank" rel="noreferrer" style={styles.button}>Michelin Guide</a>
            <a href="https://www.timeout.com/porto/restaurants" target="_blank" rel="noreferrer" style={styles.button}>Time Out Porto</a>
            <a href="https://www.tripadvisor.com/Restaurants-g189180-Porto_Porto_District_Northern_Portugal.html" target="_blank" rel="noreferrer" style={styles.button}>Tripadvisor</a>
            <a href="https://www.mercadodobolhao.pt" target="_blank" rel="noreferrer" style={styles.button}>Bolhao Market</a>
          </div>
        </section>

        <section style={{ ...styles.card, ...styles.exploreCard }}>
          <h2 style={styles.sectionTitle}>🗺 Explore</h2>
          <div style={styles.buttonGrid}>
            <a href="https://visitporto.travel" target="_blank" rel="noreferrer" style={styles.button}>Visit Porto</a>
            <a href="https://www.getyourguide.com/porto-l151/" target="_blank" rel="noreferrer" style={styles.button}>GetYourGuide</a>
            <a href="https://www.douro.com" target="_blank" rel="noreferrer" style={styles.button}>Douro Valley</a>
            <a href="https://www.livetravelportugal.com/porto" target="_blank" rel="noreferrer" style={styles.button}>Travel Portugal</a>
          </div>
        </section>
      </main>
    </div>
  );
}