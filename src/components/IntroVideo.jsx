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
          src="https://www.youtube.com/embed/VEnnNoKbInM?autoplay=1&mute=1&controls=0&loop=1&playlist=VEnnNoKbInM&rel=0&modestbranding=1"
          title="TruVine Intro"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={styles.video}
        />

        <div style={styles.overlay} />

        <div style={styles.heroContent}>
          <h1 style={styles.title}>Welcome to TruVine</h1>

          <p style={styles.text}>
            Explore God’s Word, grow in your faith, and connect with a Christ-centered community.
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
        <h2 style={styles.sectionTitle}>Featured Teaching</h2>

        <div style={styles.playerWrapper}>
          <iframe
            src="https://www.youtube.com/embed/B0JO8BNRyfE?rel=0"
            title="Featured Video"
            frameBorder="0"
            allowFullScreen
            style={styles.player}
          />
        </div>

        <p style={styles.caption}>
          Full controls enabled — watch at your pace.
        </p>
      </div>

      {/* ================= NETFLIX ROWS ================= */}

      <VideoRow
        title="📖 Bible Project Hebrew Word Studies"
        videos={[
          { id: "YoOgGeDfXDk", title: "Hebrew Word Study" },
          { id: "hhkafDU0XF0", title: "Hebrew Word Study" },
          { id: "cvEdmYKN8VE", title: "Hebrew Word Study" },
          { id: "YMTR7M33eIQ", title: "Hebrew Word Study" },
          { id: "QnrkerkrC_c", title: "Hebrew Word Study" },
          { id: "bXqQZiPmuEQ", title: "Hebrew Word Study" },
          { id: "wtp_zCElBaw", title: "Hebrew Word Study" },
          { id: "cvEdmYKN8VE", title: "Hebrew Word Study" },

        ]}
      />

      <VideoRow
        title="🔥 30-Day Bible Challenge"
        videos={[
          { id: "sJTOLFvQrE4", title: "Day 1" },
          { id: "j3VqYS8x0No", title: "Day 1" },
          { id: "E34gUZGSqIw", title: "Day 1" },
          { id: "G-8rcExz8m8", title: "Day 2" },
          { id: "u_I2AaeJMqU", title: "Day 3" },
          { id: "hhkafDU0XF0", title: "Day 4" },
          { id: "hhkafDU0XF0", title: "Day 5" },
          { id: "hhkafDU0XF0", title: "Day 6" },
          { id: "hhkafDU0XF0", title: "Day 7" },
          { id: "hhkafDU0XF0", title: "Day 8" },
          { id: "hhkafDU0XF0", title: "Day 9" },
          { id: "hhkafDU0XF0", title: "Day 10" },
          { id: "hhkafDU0XF0", title: "Day 11" },
          { id: "hhkafDU0XF0", title: "Day 12" },
          { id: "hhkafDU0XF0", title: "Day 13" },
          { id: "hhkafDU0XF0", title: "Day 14" },
          { id: "hhkafDU0XF0", title: "Day 15" },
          { id: "hhkafDU0XF0", title: "Day 16" },
          { id: "hhkafDU0XF0", title: "Day 17" },
          { id: "hhkafDU0XF0", title: "Day 18" },
          { id: "hhkafDU0XF0", title: "Day 19" },
          { id: "hhkafDU0XF0", title: "Day 20" },
          { id: "hhkafDU0XF0", title: "Day 21" },
          { id: "hhkafDU0XF0", title: "Day 22" },
          { id: "hhkafDU0XF0", title: "Day 23" },
          { id: "hhkafDU0XF0", title: "Day 24" },
          { id: "hhkafDU0XF0", title: "Day 25" },
          { id: "hhkafDU0XF0", title: "Day 26" },
          { id: "hhkafDU0XF0", title: "Day 27" },
          { id: "hhkafDU0XF0", title: "Day 28" },
          { id: "hhkafDU0XF0", title: "Day 29" },
          { id: "hhkafDU0XF0", title: "Day 30" },



        ]}
      />

      <VideoRow
        title="🙏 Prayer & Encouragement"
        videos={[
          { id: "hhkafDU0XF0", title: "Morning Prayer" },
          { id: "hhkafDU0XF0", title: "Peace in Trials" },
          { id: "hhkafDU0XF0", title: "Strength in Christ" },
        ]}
      />

    </div>
  );
}

/* ================= ROW COMPONENT ================= */

function VideoRow({ title, videos }) {
  return (
    <div style={styles.row}>
      <h2 style={styles.rowTitle}>{title}</h2>

      <div style={styles.scroll}>
        {videos.map((video, i) => (
          <div key={i} style={styles.card}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              style={styles.cardVideo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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
      "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
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
    fontSize: "2rem",
    marginBottom: "20rem",
  },

  text: {
    marginTop: "10rem",
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
      "linear-gradient(to bottom, transparent, rgba(0,0,0,1))",
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
  },

  caption: {
    textAlign: "center",
    opacity: 0.7,
    marginTop: "1rem",
  },

  /* ROWS */
  row: {
    marginTop: "3rem",
  },

  rowTitle: {
    marginLeft: "1rem",
    marginBottom: "1rem",
  },

  scroll: {
    display: "flex",
    overflowX: "auto",
    gap: "1rem",
    padding: "0 1rem",
  },

  card: {
    minWidth: "220px",
    height: "130px",
    borderRadius: "10px",
    overflow: "hidden",
    flexShrink: 0,
  },

  cardVideo: {
    width: "100%",
    height: "100%",
  },
};
