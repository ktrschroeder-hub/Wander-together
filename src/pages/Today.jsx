import { Link } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f1720",
    color: "#f8fafc",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  hero: {
    padding: "42px 16px 36px",
    textAlign: "center",
    background: "#45D3B3",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    padding: "10px 12px",
    background: "rgba(15,23,32,.92)",
    borderBottom: "1px solid rgba(148,163,184,.12)",
  },
  link: {
    padding: "9px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(148,163,184,.22)",
    color: "#e2e8f0",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: ".82rem",
  },
  content: { maxWidth: "900px", margin: "18px auto", padding: "0 14px" },
  card: {
    padding: "18px",
    borderRadius: "20px",
    background: "#45D3B3",
    border: "1px solid rgba(148,163,184,.16)",
  },
};

export default function Today() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <h1 style={{ margin: 0, fontSize: "clamp(2.4rem, 7vw, 4rem)" }}>Today's Todos</h1>
        <p style={{ margin: "10px 0 0", color: "#cbd5e1" }}>Weather, plans, and schedule.</p>
      </header>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>✈️ Wander2Gether</Link>
        <Link to="/england" style={styles.link}>🇬🇧 England</Link>
        <Link to="/porto" style={styles.link}>🇵🇹 Porto</Link>
        <Link to="/hub" style={styles.link}>❤️ Travel Hub</Link>
      </nav>
      <main style={styles.content}>
        <section style={styles.card}>
          <h2 style={{ marginTop: 0 }}>✨ Coming up today</h2>
          <p style={{ marginBottom: 0, color: "#cbd5e1" }}>Add today’s weather, plans, and schedule here.</p>
        </section>
      </main>
    </div>
  );
}