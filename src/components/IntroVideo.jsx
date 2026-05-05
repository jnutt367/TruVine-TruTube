// components/IntroVideo.jsx

export default function IntroVideo() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
       <h2 style={styles.title}>Welcome to the Vine</h2>
          <div style={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/n8jOYOfD5Oo"
              title="THE KING IS COMING"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media"
              style={styles.iframe}
            />
        
          </div>
  
          <p style={styles.text}>
          Explore God’s Word. Grow your faith.
           Connect with a Christ-centered community. 
           TruTUBE is a carefully curated, Christ-led video library designed to help you live out the truth of Jesus daily.
          </p>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      backgroundColor: "black",
      padding: "2rem 1rem",
      display: "flex",
      justifyContent: "center",
      color: "white",
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
      fontFamily: "cursive",
    },

    videoWrapper: {
        position: "relative",
        width: "90%",          // 👈 add this
        maxWidth: "300px",      // 👈 add this (controls size)
        margin: "0 auto",       // 👈 centers it
        paddingBottom: "20%", // keep this (9:16 ratio)
        height: "300px",
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
      marginTop: "25px", 
      fontSize: "0.95rem",
      color: "gold",
      textShadow: "1px 0.2px 0.2px gold",
      
    },
  };
