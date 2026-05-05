import { useState } from "react";

export default function IntroVideo() {
  const [playWithSound, setPlayWithSound] = useState(false);

  return (
    <div style={styles.hero}>
      
      {/* Background OR Active Video */}
      {!playWithSound ? (
        <iframe
          src="https://www.youtube.com/embed/B0JO8BNRyfE?autoplay=1&mute=1&controls=0&loop=1&playlist=B0JO8BNRyfE"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={styles.video}
        />
      ) : (
        <iframe
          src="https://www.youtube.com/embed/B0JO8BNRyfE?autoplay=1"
          title="Main Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={styles.video}
        />
      )}

      {/* Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to the Vine</h1>

        <p style={styles.text}>
          Explore God’s Word. Grow your faith. Connect with a Christ-centered community.
          TruTUBE is a carefully curated, Christ-led video library designed to help you live out the truth of Jesus daily.
        </p>

        {!playWithSound && (
          <button
            style={styles.button}
            onClick={() => setPlayWithSound(true)}
          >
            ▶ Watch with Sound
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "80vh",
    overflow: "hidden",
    color: "white",
  },

  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "120%",
    height: "120%",
    transform: "translate(-50%, -50%)",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4), rgba(0,0,0,0.85))",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
    padding: "2rem",
    top: "80%",
    transform: "translateY(-50%)",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },

  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    color: "#e5e5e5",
  },

  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "999px",
    border: "none",
    background: "#2D7C66",
    color: "white",
    cursor: "pointer",
  },
};
