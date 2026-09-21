import { Link } from "react-router-dom";
import london from "../assets/images/London.jpeg";

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "#0f1720",
    color: "#f8fafc",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  hero: {
    minHeight: "230px",
    backgroundImage: `url(${london})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "1.25rem",
  },

  overlay: {
    width: "100%",
    background: "transparent",
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
    letterSpacing: "0.01em",
    boxShadow: "0 8px 18px rgba(15,23,32,0.18)",
  },

  section: {
    maxWidth: "1100px",
    margin: "26px auto",
    padding: "0 16px 24px",
  },

  card: {
    background: "#18212d",
    borderRadius: "22px",
    padding: "20px 18px 18px",
    marginBottom: "18px",
    border: "1px solid rgba(148,163,184,0.14)",
    boxShadow: "0 18px 40px rgba(15, 23, 32, 0.22)",
  },

  stayCard: {
    background: "#2F8F98",
    color: "#0f172a",
  },

  transitCard: {
    background: "#5BB7E8",
    color: "#0f172a",
  },

  foodCard: {
    background: "#D8B07A",
    color: "#0f172a",
  },

  exploreCard: {
    background: "#D89A45",
    color: "#0f172a",
  },

  sectionTitle: {
    margin: "0 0 16px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "rgba(15,23,32,.3)",
    border: "1px solid rgba(147,197,253,0.38)",
    fontSize: "1.1rem",
    fontWeight: 800,
    letterSpacing: "0.02em",
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
    background: "#f8fafc",
    color: "#0f172a",
    textDecoration: "none",
    padding: "11px 12px",
    borderRadius: "14px",
    fontWeight: 800,
    fontSize: "0.9rem",
    border: "1px solid rgba(148,163,184,0.35)",
    boxShadow: "0 12px 24px rgba(59,130,246,0.14)",
  },
};

export default function England() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.overlay}>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              lineHeight: 0.95,
              margin: 0,
              fontWeight: 900,
              letterSpacing: "0.015em",
              color: "#ffffff",
              textShadow: "0 3px 18px rgba(0,0,0,0.8)",
            }}
          >
            🇬🇧 England
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              margin: 0,
              opacity: 1,
              fontWeight: 700,
              color: "#f8fafc",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            September 24 – September 29
          </p>
        </div>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          ✈️ Wander2Gether
        </Link>

        <a
          href="https://www.weather.com/weather/today/l/London+England"
          target="_blank"
          rel="noreferrer"
          style={styles.navLink}
        >
          🌤 Weather
        </a>

        <a
          href="https://translate.google.com"
          target="_blank"
          rel="noreferrer"
          style={styles.navLink}
        >
          💬 Translate
        </a>

        <a
          href="https://www.bbc.com/news"
          target="_blank"
          rel="noreferrer"
          style={styles.navLink}
        >
          📰 News
        </a>

        <a
          href="https://www.xe.com/currencyconverter/"
          target="_blank"
          rel="noreferrer"
          style={styles.navLink}
        >
          💱 Currency
        </a>

        <Link to="/" style={styles.navLink}>
          ⭐ KT & Wade
        </Link>
      </nav>

      <main style={styles.section}>
        <section id="stay" style={{ ...styles.card, ...styles.stayCard }}>
          <h2 style={styles.sectionTitle}>🏡 Stay</h2>

          <div style={styles.stayRow}>
            <p style={styles.stayTitle}>Kindred Home</p>
            <span style={styles.stayAddress}>
              Flat 10 Boston Deals Gateway London SE13 7RW
            </span>
          </div>

          <div style={styles.buttonGrid}>
            <a
              href="https://livekindred.com/household/cmawyteli3kkkxc7xvp939dke"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              📱 Kindred
            </a>

            <a
              href="https://maps.google.com/?q=Flat+10+Boston+Deals+Gateway+London+SE13+7RW"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              📍 Google Maps
            </a>
          </div>
        </section>

        <section
          id="transit"
          style={{ ...styles.card, ...styles.transitCard }}
        >
          <h2 style={styles.sectionTitle}>🚇 Transit</h2>

          <div style={styles.buttonGrid}>
            <a
              href="https://citymapper.com/london"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Citymapper
            </a>

            <a
              href="https://tfl.gov.uk"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              TfL
            </a>

            <a
              href="https://www.thetrainline.com"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Trainline
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Google Maps
            </a>
          </div>
        </section>

        <section id="food" style={{ ...styles.card, ...styles.foodCard }}>
          <h2 style={styles.sectionTitle}>🍽 Food</h2>

          <div style={styles.buttonGrid}>
            <a
              href="https://guide.michelin.com"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Michelin Guide
            </a>

            <a
              href="https://www.timeout.com/london/restaurants"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Time Out
            </a>

            <a
              href="https://boroughmarket.org.uk"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Borough Market
            </a>

            <a
              href="https://greenwichmarket.london"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Greenwich Market
            </a>
          </div>
        </section>

        <section
          id="explore"
          style={{ ...styles.card, ...styles.exploreCard }}
        >
          <h2 style={styles.sectionTitle}>🗺 Explore</h2>

          <div style={styles.buttonGrid}>
            <a
              href="https://www.visitlondon.com"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Visit London
            </a>

            <a
              href="https://www.timeout.com/london/things-to-do"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Time Out
            </a>

            <a
              href="https://www.nationaltrust.org.uk"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              National Trust
            </a>

            <a
              href="https://www.alltrails.com"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              AllTrails
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
