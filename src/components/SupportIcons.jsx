import { FaPatreon, FaCoffee } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";

export default function SupportIcons() {
  return (
    <div style={styles.wrapper}>
      <style>{`
        .support-icon {
          position: relative;
          overflow: hidden;
          animation: breathe 5s ease-in-out infinite;
        }

        /* Warm shimmer (golden light sweep) */
        .support-icon::after {
          content: "";
          position: absolute;
          top: 0;
          left: -80%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 0%,
            rgba(255, 223, 130, 0.45) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-20deg);
        }

        /* Staggered shimmer timing */
        .support-icon:nth-child(1)::after {
          animation: shimmer 6s infinite;
        }

        .support-icon:nth-child(2)::after {
          animation: shimmer 6s infinite 2s;
        }

        .support-icon:nth-child(3)::after {
          animation: shimmer 6s infinite 4s;
        }

        @keyframes shimmer {
          0% { left: -80%; }
          100% { left: 130%; }
        }

        /* Gentle breathing effect */
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Hover = intentional response */
        .support-icon:hover {
          transform: scale(1.12);
          box-shadow: 0 0 12px rgba(255, 223, 130, 0.6);
        }
      `}</style>

      <div style={styles.iconRow}>
        <a
          href="https://www.patreon.com/c/TruVine"
          target="_blank"
          className="support-icon"
          style={styles.iconButton}
          title="Patreon"
        >
          <FaPatreon />
        </a>

        <a
          href="https://cash.app/$JesusLoveRevealed"
          target="_blank"
          className="support-icon"
          style={styles.iconButton}
          title="Cash App"
        >
          <SiCashapp />
        </a>

        <a
          href="https://buymeacoffee.com/jnutt367m"
          target="_blank"
          className="support-icon"
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
    opacity: 0.95,
  },
  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1.1rem",
  },
  iconButton: {
    fontSize: "1.25rem",
    color: "#fff",
    background: "#2D7C66",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};
