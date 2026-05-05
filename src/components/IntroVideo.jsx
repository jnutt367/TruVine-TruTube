import { useState } from "react";

export default function IntroVideo() {
  const [playWithSound, setPlayWithSound] = useState(false);

  return (
    <div style={styles.hero}>
      
      {/* Video */}
      <iframe
        src={
          playWithSound
            ? "https://www.youtube.com/embed/B0JO8BNRyfE?autoplay=1"
            : "https://www.youtube.com/embed/B0JO8BNRyfE?autoplay=1&mute=1&controls=0&loop=1&playlist=B0JO8BNRyfE"
        }
        title="Intro Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={styles.video}
      />

      {/* Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to the Vine</h1>

        <p style={styles.text}>
          Explore God’s Word. Grow your faith. Connect with a Christ-centered community.
          TruTUBE is a carefully curated, Christ-led video library designed to help you live out the truth of Jesus daily.
        </p>
      </div>

      {/* 🔥 Mobile-Safe Button (always visible) */}
      {!playWithSound && (
        <button
          style={styles.button}
          onClick={() => setPlayWithSound(true)}
        >
          ▶ Watch with Sound
        </button>
      )}
    </div>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "70vh", // mobile friendly
    minHeight: "500px",
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
    pointerEvents: "none", // 🔑 ensures button works
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
    padding: "1.5rem",
    margin: "0 auto",
    textAlign: "center",
    top: "40%",
    transform: "translateY(-40%)",
  },

  title: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "25rem",
    fontFamily: "cursive",
    color: "silver",
    textShodow: "3px 3px 3px solid #447d77",
  },

  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "silver",
    paddingBottom: "5rem", 
    
  },

  button: {
    position: "absolute",
    bottom: "25px", // 👈 always visible on mobile
    left: "50%",
    transform: "translateX(-50%)",
    padding: "0.9rem 1.6rem",
    fontSize: "1rem",
    borderRadius: "999px",
    border: "none",
    background: "#2D7C66",
    color: "white",
    cursor: "pointer",
    zIndex: 3,
  },
};
