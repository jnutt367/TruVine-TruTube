// components/SupportIcons.jsx

import { FaPatreon, FaCoffee } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";

export default function SupportIcons() {
  return (
    <div style={styles.wrapper}>
    

      <div style={styles.iconRow}>
        <a
          href="https://www.patreon.com/c/TruVine"
          target="_blank"
          style={styles.iconButton}
          title="Patreon"
        >
          <FaPatreon />
        </a>

        <a
          href="https://cash.app/$JesusLoveRevealed"
          target="_blank"
          style={styles.iconButton}
          title="Cash App"
        >
          <SiCashapp />
        </a>

        <a
          href="https://buymeacoffee.com/jnutt367m"
          target="_blank"
          style={styles.iconButton}
          title="Buy Me a Coffee"
        >
          <FaCoffee />
        </a>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: "1rem",
    textAlign: "center",
    opacity: 0.8,
  },
  text: {
    fontSize: "0.8rem",
    color: "#666",
    marginBottom: "0.5rem",
  },
  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  iconButton: {
    fontSize: "1.2rem",
    color: "#444",
    background: "#2D7C66",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
};
