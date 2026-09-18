import { Link } from "react-router-dom";
import london from "../assets/images/London.jpeg";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f1720",
    color: "#f8fafc",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  hero: {
    minHeight: "420px",
    backgroundImage: `url(${london})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "2rem",
    position: "relative",
  },
  overlay: {
    width: "100%",
    background: "linear-gradient(180deg, rgba(15, 23, 32, 0.2), rgba(15, 23, 32, 0.7))",
    padding: "1.5rem 1.25rem",
    borderRadius: "12px",
  },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    justifyContent: "center",
    padding: "1rem",
    background: "#0b1220",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  navLink: {
    color: "#f8fafc",
    textDecoration: "none",
    background: "rgba(255,255,255,0.06)",
    padding: "0.6rem 0.9rem",
    borderRadius: "999px",
    fontWeight: 600,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.25rem",
    padding: "1.5rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    background: "rgba(15, 23, 32, 0.9)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "1.25rem",
    minHeight: "220px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  },
};

export default function England() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={{ margin: 0, fontSize: "2.5rem" }}>🇬🇧 England</h1>
          <p style={{ margin: "0.5rem 0 0", fontSize: "1.1rem" }}>
            September 24 – September 29
          </p>
        </div>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>🏠 Home</Link>
        <Link to="/england/home" style={styles.navLink}>🏡 Home Base</Link>
        <Link to="/england/stay" style={styles.navLink}>📅 Stay</Link>
        <Link to="/england/transit" style={styles.navLink}>🚇 Transit</Link>
        <Link to="/england/food" style={styles.navLink}>🍽 Food</Link>
        <Link to="/england/map" style={styles.navLink}>🗺 Map</Link>
      </nav>

      <section style={styles.infoGrid}>
        <Link to="/england/home" style={styles.cardLink}>
          <div style={styles.card}>
            <h3 style={{ marginTop: 0 }}>🏠 Home Base</h3>
            <strong>Residential & Cozy Home</strong>
            <p style={{ lineHeight: 1.6 }}>
              Flat 10 Boston<br />
              Deals Gateway<br />
              London SE13 7RW
            </p>
          </div>
        </Link>

        <Link to="/england/stay" style={styles.cardLink}>
          <div style={styles.card}>
            <h3 style={{ marginTop: 0 }}>📅 Stay</h3>

            <p style={{ margin: "0 0 0.75rem" }}>
              <strong>Check-in</strong><br />
              Thursday, Sept 24 – 4:00 PM
            </p>

            <p style={{ margin: 0 }}>
              <strong>Check-out</strong><br />
              Monday, Sept 28 – 11:00 AM
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
