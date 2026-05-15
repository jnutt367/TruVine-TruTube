import { useEffect, useRef, useState } from "react";

export default function TruVineHome() {
  const playerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (playerRef.current) observer.observe(playerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.page}>
      
      {/* ================= HERO ================= */}
      <div style={styles.hero}>
        <iframe
          src="https://www.youtube.com/embed/m0yu1qyevwE?autoplay=1&mute=1&controls=0&loop=1&playlist=m0yu1qyevwE&rel=0&modestbranding=1"
          title="The Lord’s Prayer Could Rewire Your Daily Life"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={styles.video}
        />

        <div style={styles.overlay} />

        <div style={styles.heroContent}>
       

          <p style={styles.text}>
          Explore Christ-centered videos, grow deeper in your faith, and connect with a community anchored in Jesus.
          </p>

          <p style={styles.subtext}>Scroll to begin your journey</p>
        </div>
<div style={styles.fadeBottom} />
       
      </div>
      
      {/* ================= FEATURED PLAYER ================= */}
      <div
        ref={playerRef}
        style={{
          ...styles.playerSection,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <h2 style={styles.sectionTitle}>Abide in the VINE</h2>

        <div style={styles.playerWrapper}>
          <iframe
            src="https://www.youtube.com/embed/BG2BA2_3e30?autoplay=1&mute=1&controls=0&loop=1"
            title="The Story of the Bible"
            frameBorder="0"
            allowFullScreen
            style={styles.player}
          />
        </div>
        
        <p style={styles.caption}>
          Full Controls Enabled — Watch More Carefully Curated Christian Videos Below the Support Icons!
        </p>
      </div>
     
      {/* ================= NETFLIX ROWS ================= */}



    </div>
  );
}

/* ================= ROW COMPONENT ================= */



/* ================= STYLES ================= */

const styles = {
  page: {
    backgroundColor: "#000",
    color: "white",
  },

  /* HERO */
  hero: {
    position: "relative",
    width: "100%",
    height: "70vh",
    minHeight: "500px",
    overflow: "hidden",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, #2D7C66, transparent, transparent)",
    pointerEvents: "none",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "2rem",
    top: "40%",
    transform: "translateY(-40%)",
  },

  title: {
    fontSize: "2.5rem",
    marginTop: "25rem",
    fontFamily:"Helvetica",
    background: "linear-gradient(to top, transparent, #2D7C66, transparent)",
    zIndex: 10,
  },

  text: {
    marginTop: "30rem",
    fontSize: "1rem",
    opacity: 0.9,
  },

  subtext: {
    fontSize: "0.9rem",
    opacity: 0.7,
    marginTop: "0.5rem",
  },

  fadeBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "160px",
    background:
      "linear-gradient(to bottom, transparent, rgba(0, 0 ,0, 0.9))",
  },

  /* FEATURED PLAYER */
  playerSection: {
    padding: "4rem 1.5rem",
    transition: "all 0.8s ease",
  },

  sectionTitle: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },

  playerWrapper: {
    maxWidth: "900px",
    margin: "0 auto",
    aspectRatio: "16 / 9",
  },

  player: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    opacity: 0.9,
  },

  caption: {
    textAlign: "center",
    opacity: 0.7,
    marginTop: "1rem",
  },

  
};
