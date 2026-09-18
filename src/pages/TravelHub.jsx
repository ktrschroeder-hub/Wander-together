import { Link } from "react-router-dom";
import travelHubHero from "../assets/images/travelhub.jpeg";

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
    minHeight: "210px",
    backgroundImage: `linear-gradient(rgba(15,23,32,.18), rgba(15,23,32,.72)), url(${travelHubHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "1.25rem",
  },
  overlay: {
    width: "100%",
    background: "linear-gradient(180deg, rgba(15,23,32,0), rgba(15,23,32,.82))",
    padding: "1.5rem 1.25rem .5rem",
    textAlign: "center",
    transform: "translateY(-18px)",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    padding: "8px 12px",
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
  },
  section: {
    maxWidth: "1100px",
    margin: "16px auto",
    padding: "0 12px 16px",
  },
  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "12px",
    alignItems: "start",
  },
  card: {
    borderRadius: "22px",
    padding: "14px",
    marginBottom: "12px",
    border: "1px solid rgba(148,163,184,0.14)",
    boxShadow: "0 18px 40px rgba(15, 23, 32, 0.22)",
  },
  tickets: {
    background: "linear-gradient(180deg, rgba(14,116,144,.42), rgba(15,23,42,.98))",
  },
  apps: {
    background: "linear-gradient(180deg, rgba(124,58,237,.42), rgba(15,23,42,.98))",
  },
  planning: {
    background: "linear-gradient(180deg, rgba(22,163,74,.4), rgba(15,23,42,.98))",
  },
  sectionTitle: {
    margin: "0 0 10px",
    display: "inline-flex",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(255,255,255,.14)",
    border: "1px solid rgba(255,255,255,.3)",
    fontSize: ".95rem",
    fontWeight: 800,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "8px",
  },
  flightGroup: {
    display: "grid",
    gap: "5px",
  },
  flightLabel: {
    color: "#cbd5e1",
    fontSize: ".68rem",
    fontWeight: 800,
    letterSpacing: ".04em",
    textTransform: "uppercase",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    padding: "10px",
    borderRadius: "12px",
    background: "rgba(255,255,255,.94)",
    color: "#0f172a",
    textDecoration: "none",
    fontWeight: 800,
  },
  detail: {
    fontSize: ".68rem",
    fontWeight: 600,
    color: "#475569",
  },
};

const resources = {
  journey: "https://passport.journeetrips.com/trips/xh6sgwmhzv/",
  faye: "https://www.withfaye.com/",
  united: "https://www.united.com/en/US/manageres/tripdetails",
  ejet: "https://www.easyjet.com/en/?accntmdl=2",
  american: "https://www.aa.com/manage-reservation/viewres/ui/app/viewres?data=nLw3lsy99iaElS455s6I_azqq4s8L5pjoCHFKtI_QSpjMZ2UnuXp-xrdWtov8dIwrihETaULnAOufbe8vGYiUoHuAgmPr0Gb3UF36AL41IyQ7dPaUd4yjuVoWL4rLmGXkpzhXjssqevUFu-frX4vH1Txuvf_5DgmdOci9ag2cZERqbW9tGUr0COoXoZXFhchtXkqAsitrw3GhPKtUrFVWFhrpPmSsa02vyeCVLnrdX8iEpusA4SkYZzLcz9FPQsIj1hG6fuv6hbMyR3XeyEfXKYXB6lfmxQ4ppWqUEqxthG6s2s-3g0yb-FcQvbMif60EDsAvNklpcexM82dWwfRr4v9_n39Cwdvcjdn6dVIAEuJiDxsJI8gOyPdZtu6yVT6BZ78frowZz7lgwYpczCy84OT-o4Clw5_zfDPnGDeur4teGtBllWp5XD-BF_TNJy-FWkKnTStC9CTub4mnxpMhQhsYsrnzZKDAKu2lDgHVwCXCQmFH67oSBnvRYYM2E-nhVLVog65ZGHYa4F-IVQS7E5mLr8ogFWvTmex-xUqUCekX1Q8SMsNTYXdG3dAufM9Vx4wzNjumlrdClaQwotkYD3CvTVrvQGinwZ2oHyhRqizTV1nPuenW9oIxKFmrgoTF63GylMzqRgqY0syi58c_9SzEp4YyA_szc4KfyhDOdHpLx3lUsCjZ-sMYUgkEI3IxzmJ03PkbO_8BF6V8f5sooILYrVyTBw3JCFMxsYUf3CfkE318ZEpEZLP1KESpe-cw%3D%3D",
  spreadsheet:
    "https://docs.google.com/spreadsheets/d/183JOmaFs-wvBQPwZX3YKEdyKpZsFC-CejmB-3S1v_J4/edit?usp=drive_link",
};

function ResourceLink({ href, title, detail, details = [] }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={styles.link}>
      {title}
      <span style={styles.detail}>{detail}</span>
      {details.map((item) => (
        <span key={item} style={styles.detail}>{item}</span>
      ))}
    </a>
  );
}

export default function TravelHub() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)", margin: 0, fontWeight: 900, textShadow: "0 3px 18px rgba(0,0,0,.8)" }}>
            ❤️ Travel Hub
          </h1>
          <p style={{ fontSize: ".9rem", margin: "8px 0 0", fontWeight: 700 }}>
            Everything you need for the journey
          </p>
        </div>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>✈️ Wander2Gether</Link>
        <Link to="/england" style={styles.navLink}>🇬🇧 England</Link>
        <Link to="/porto" style={styles.navLink}>🇵🇹 Porto</Link>
        <Link to="/mystery" style={styles.navLink}>🧭 Mystery Trip</Link>
      </nav>

      <main style={styles.section}>
        <div style={styles.dashboardGrid}>
          <section style={{ ...styles.card, ...styles.tickets }}>
          <h2 style={styles.sectionTitle}>🎫 Tickets & travel services</h2>
          <div style={styles.grid}>
            <div style={styles.flightGroup}>
              <span style={styles.flightLabel}>Flight to London</span>
              <ResourceLink
                href={resources.united}
                title="✈️ United"
                detail="Washington, DC (IAD) → London Heathrow (LHR)"
                details={[
                  "Departs Wed 23 Sep 2026 · 22:05",
                  "Arrives Thu 24 Sep 2026 · 10:40",
                  "Seats 45L / 45K",
                ]}
              />
            </div>
            <div style={styles.flightGroup}>
              <span style={styles.flightLabel}>Flight to Porto</span>
              <ResourceLink
                href={resources.ejet}
                title="✈️ easyJet EZY8523"
                detail="London → Porto"
                details={[
                  "Fri 9 Oct 2026 · Departs 16:35 · Arrives 19:05",
                  "Bag drop: 14:05–15:35",
                ]}
              />
            </div>
            <div style={styles.flightGroup}>
              <span style={styles.flightLabel}>Flight home</span>
              <ResourceLink href={resources.american} title="✈️ American Airlines" detail="Open reservation details" />
            </div>
          </div>
          </section>

          <section style={{ ...styles.card, ...styles.apps }}>
          <h2 style={styles.sectionTitle}>📱 Apps</h2>
          <div style={styles.grid}>
            <ResourceLink href={resources.journey} title="🗺 Journee" detail="Open the trip itinerary" />
            <ResourceLink href={resources.faye} title="🛡 Faye" detail="Travel insurance app" />
            <ResourceLink href="https://maps.google.com" title="📍 Google Maps" detail="Maps, saved places, and directions" />
            <ResourceLink href="https://translate.google.com" title="💬 Google Translate" detail="Translate while traveling" />
            <ResourceLink href="https://www.xe.com/currencyconverter/" title="💱 XE Currency" detail="Check exchange rates" />
          </div>
          </section>
        </div>

        <section style={{ ...styles.card, ...styles.planning }}>
          <h2 style={styles.sectionTitle}>📊 Shared planning</h2>
          <div style={styles.grid}>
            <ResourceLink href={resources.spreadsheet} title="📋 Trip spreadsheet" detail="Shared bookings, plans, and notes" />
          </div>
        </section>
      </main>
    </div>
  );
}