export default function EcosystemSection() {
    return (
      <div style={styles.wrapper}>
        <p style={styles.label}>Explore the ecosystem</p>
  
        <p style={styles.subtext}>
          Connected platforms for growing in God’s Word.
        </p>
  
        <div style={styles.grid}>
          <a href="https://jesus-love-revealed.vercel.app/" target="_blank" style={styles.card}>
            Jesus Love Revealed
          </a>
  
          <a href="https://wordofgod.vercel.app/" target="_blank" style={styles.card}>
            The Word of God Risen
          </a>
        </div>
      </div>
    );
  }
  
  const styles = {
    wrapper: {
      padding: "1.5rem 1rem",
      textAlign: "center",
      opacity: 0.9,
    },
  
    label: {
      fontSize: "0.85rem",
      fontWeight: "500",
      color: "#555",
      marginBottom: "0.2rem",
    },
  
    subtext: {
      fontSize: "0.75rem",
      color: "#888",
      marginBottom: "1rem",
    },
  
    grid: {
      display: "flex",
      justifyContent: "center",
      gap: "0.75rem",
      flexWrap: "wrap",
    },
  
    card: {
      padding: "0.7rem 1rem",
      borderRadius: "12px",
      background: "#f7f9fc",
      textDecoration: "none",
      color: "#444",
      fontSize: "0.8rem",
      minWidth: "160px",
      border: "1px solid #eef1f5",
      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
      transition: "all 0.2s ease",
    },
  };