// components/IntroVideo.jsx

export default function IntroVideo() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Welcome to Jesus Love Revealed</h2>
  
          <div style={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/HIvDMP9vFQw"
              title="Intro Video"
              frameBorder="0"
              allowFullScreen
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
      marginBottom: "1rem",
      fontSize: "1.5rem",
    },
    videoWrapper: {
      position: "relative",
      paddingBottom: "177.77%", // 9:16 ratio for Shorts
      height: 0,
      overflow: "hidden",
      borderRadius: "16px",
      marginBottom: "1rem",
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
      color: "#555",
    },
  };