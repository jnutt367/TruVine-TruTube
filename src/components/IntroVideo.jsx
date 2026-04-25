// components/IntroVideo.jsx

export default function IntroVideo() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Welcome to the Vine</h2>
  
          <div style={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/HIvDMP9vFQw?autoplay=1&mute=1&controls=1&rel=0"
              title="Intro Video"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media"
              style={styles.iframe}
            />
          </div>
  
          <p style={styles.text}>
            A place to explore God’s Word, grow in your faith, and be part of a
            connected community centered on Jesus Christ.
          </p>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: "2rem 1rem",
      display: "flex",
      justifyContent: "center",
    },
    content: {
      maxWidth: "700px",
      width: "100%",
      textAlign: "center",
    },
    title: {
      color: "#2D7C66",
      marginBottom: "1rem",
      fontSize: "1.5rem",
    },

    videoWrapper: {
        position: "relative",
        width: "100%",          // 👈 add this
        maxWidth: "300px",      // 👈 add this (controls size)
        margin: "0 auto",       // 👈 centers it
        paddingBottom: "20%", // keep this (9:16 ratio)
        height: "500px",
        overflow: "hidden",
        borderRadius: "16px",
      },

    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    text: {
      fontSize: "0.95rem",
      color: "#2D7C66",
    },
  };