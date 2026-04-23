// components/SupportSection.jsx

export default function SupportSection() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <p style={styles.title}>Support the Mission 🤍</p>
  
          <p style={styles.text}>
            If this content has encouraged you, you are welcome to support the mission.
          </p>
  
          <p style={styles.subtext}>
            Every contribution helps spread Jesus hope and love.
          </p>
  
          <div style={styles.links}>
            <a href="https://www.patreon.com/c/TruVine" target="_blank" style={styles.link} onMouseEnter={(e) => (e.target.style.background = "orange", e.target.style.color = "white")}
  onMouseLeave={(e) => (e.target.style.background = "#f5f7fa", e.target.style.color = "black")}>
              TruVine Patreon
            </a>
            <a href="https://cash.app/$JesusLoveRevealed" target="_blank" style={styles.link} onMouseEnter={(e) => (e.target.style.background = "green", e.target.style.color = "white")}
  onMouseLeave={(e) => (e.target.style.background = "#f5f7fa", e.target.style.color = "black")}>
             TruVine Cash App
            </a>
            <a href="https://buymeacoffee.com/jnutt367m" target="_blank" style={styles.link} onMouseEnter={(e) => (e.target.style.background = "blue", e.target.style.color = "white")}
  onMouseLeave={(e) => (e.target.style.background = "#f5f7fa", e.target.style.color = "black")}>
             TruVine Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: "3rem 1rem",
      display: "flex",
      justifyContent: "center",
    },
    card: {
      maxWidth: "500px",
      width: "100%",
      background: "#ffffff",
      borderRadius: "20px",
      padding: "2rem",
      textAlign: "center",
      boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
      border: "1px solid #f0f0f0",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "#333",
    },
    text: {
      fontSize: "0.95rem",
      color: "#555",
      marginBottom: "0.5rem",
    },
    subtext: {
      fontSize: "0.85rem",
      color: "#888",
      marginBottom: "1.5rem",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      flexWrap: "wrap",
    },
    link: {
      textDecoration: "none",
      padding: "0.5rem 1rem",
      borderRadius: "999px",
      background: "#f5f7fa",
      color: "#333",
      fontSize: "0.85rem",
      transition: "0.2s ease",
    },
  };