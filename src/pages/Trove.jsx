import { Link } from "react-router-dom";
import { useState } from "react";
import treasuresHero from "../assets/images/Treasures.jpeg";

const styles = {
  page: { minHeight: "100vh", background: "#07151c", color: "#f7f4e8", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
  hero: {
    minHeight: "180px",
    padding: "1.25rem",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage: `url(${treasuresHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  nav: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", padding: "10px 12px", background: "#0d2930", borderBottom: "1px solid #6f8f72" },
  link: { padding: "9px 14px", borderRadius: "999px", background: "#263f43", border: "1px solid #9fb3a0", color: "#f7f4e8", textDecoration: "none", fontWeight: 700, fontSize: ".82rem" },
  content: { maxWidth: "900px", margin: "18px auto", padding: "0 14px" },
  intro: { padding: "22px", borderRadius: "20px", background: "#263f43", border: "2px solid #d6b45c", color: "#f7f4e8", textAlign: "center" },
  surpriseButton: { border: "1px solid #d6b45c", padding: "13px 20px", borderRadius: "999px", background: "#d6b45c", color: "#07151c", fontSize: "1rem", fontWeight: 900, cursor: "pointer" },
  tripcastButton: { display: "inline-block", marginLeft: "10px", padding: "12px 18px", borderRadius: "999px", background: "#9fc3c3", border: "1px solid #6f8f72", color: "#07151c", textDecoration: "none", fontWeight: 900 },
  airtableEmbed: { width: "100%", height: "533px", marginTop: "18px", border: "1px solid #ccc", borderRadius: "12px", background: "transparent" },
  returnStay: { marginTop: "18px", padding: "20px", borderRadius: "20px", background: "#9fc3c3", color: "#07151c", textAlign: "left" },
  stayHeading: { margin: "0 0 14px", fontSize: "1.2rem", fontWeight: 900 },
  stayGrid: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" },
  stayItem: { padding: "14px", borderRadius: "14px", background: "rgba(247, 244, 232, .72)", border: "1px solid rgba(7, 21, 28, .18)" },
  insightGrid: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px", marginTop: "12px" },
  insight: { minHeight: "150px", padding: "18px", borderRadius: "20px", border: "2px solid #6f8f72", color: "#07151c", textAlign: "center" },
  teal: { background: "#9fc3c3" },
  yellow: { background: "#d6b45c" },
  lavender: { background: "#a9b6c0" },
  green: { background: "#6f8f72" },
};

const insights = [
  { label: "Today's Theme", title: "Hidden Courtyards", copy: "You unknowingly photographed five different hidden gardens today.", style: styles.teal },
  { label: "Color of the Day", title: "Deep blue", copy: "It appeared in the Thames, the Underground tiles, and your dinner plate.", style: styles.yellow },
  { label: "Food Adventure", title: "Three first tastes", copy: "Today you tried three things you've never eaten before.", style: styles.lavender },
  { label: "Favorite Face", title: "Wade smiled 18 times", copy: "Your camera kept finding the same joyful face throughout the day.", style: styles.green },
];

export default function Trove() {
  const [surpriseIndex, setSurpriseIndex] = useState(0);
  const surprise = insights[surpriseIndex];

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div>
          <h1 style={{ margin: 0, color: "#ffffff", fontSize: "clamp(2.4rem, 7vw, 4rem)", fontWeight: 900 }}>Trove</h1>
          <p style={{ margin: "10px 0 0", color: "#f8fafc", fontWeight: 700 }}>Collect the best moments from each day.</p>
        </div>
      </header>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>✈️ Wander2Gether</Link>
        <Link to="/england" style={styles.link}>🇬🇧 England</Link>
        <Link to="/porto" style={styles.link}>🇵🇹 Porto</Link>
        <Link to="/hub" style={styles.link}>❤️ Travel Hub</Link>
      </nav>
      <main style={styles.content}>
        <section style={styles.intro}>
          <p style={{ margin: 0, color: "#f4ee72", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", fontSize: ".75rem" }}>Your AI curator</p>
          <h2 style={{ margin: "8px 0", fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}>What did your day notice?</h2>
          <p style={{ margin: "0 auto 18px", color: "#b9e3f4", maxWidth: "520px" }}>Trove looks for the patterns hiding inside your photos and turns them into a story worth keeping.</p>
          <button type="button" style={styles.surpriseButton} onClick={() => setSurpriseIndex((surpriseIndex + 1) % insights.length)}>
            ✨ Surprise Me
          </button>
          <a href="https://tripcast.co/i/MYSDW4P4" target="_blank" rel="noreferrer" style={styles.tripcastButton}>
            🗺 Open Tripcast
          </a>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/appWoqkiCCSfqPQrU/pagzogDSuPHTyEwHG/form"
            title="Add a Treasure form"
            frameBorder="0"
            onMouseWheel={() => {}}
            style={styles.airtableEmbed}
          />

          <section style={styles.returnStay} aria-labelledby="return-stay-title">
            <h2 id="return-stay-title" style={styles.stayHeading}>🏡 Return stay</h2>
            <div style={styles.stayGrid}>
              <article style={styles.stayItem}>
                <p style={{ margin: 0, fontSize: ".75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".06em" }}>Check-in</p>
                <p style={{ margin: "8px 0 0", fontWeight: 800 }}>Fri 9 Oct 2026</p>
                <p style={{ margin: "4px 0 0" }}>From 3pm</p>
              </article>
              <article style={styles.stayItem}>
                <p style={{ margin: 0, fontSize: ".75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".06em" }}>Check-out</p>
                <p style={{ margin: "8px 0 0", fontWeight: 800 }}>Sat 10 Oct 2026</p>
                <p style={{ margin: "4px 0 0" }}>By 12pm</p>
              </article>
            </div>
          </section>
        </section>

        <section style={styles.insightGrid}>
          {insights.map((item, index) => (
            <article key={item.label} style={{ ...styles.insight, ...item.style, boxShadow: index === surpriseIndex ? "inset 0 0 0 2px #f4ee72" : "none" }}>
              <p style={{ margin: 0, fontSize: ".75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".06em" }}>{item.label}</p>
              <h3 style={{ margin: "14px 0 8px", fontSize: "1.35rem" }}>{index === surpriseIndex ? surprise.title : item.title}</h3>
              <p style={{ margin: 0, lineHeight: 1.45 }}>{item.copy}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}