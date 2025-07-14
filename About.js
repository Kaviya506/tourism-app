const About = () => {
  return (
    <div style={styles.container}>
     <p style={styles.quote}>
  <strong><em>“Travel isn’t always pretty. It isn’t always comfortable. But that’s okay. The journey changes you — it should.”</em></strong>
  <br />— Anthony Bourdain
</p>

      
      <h1 style={styles.heading}>About WanderWorld </h1>

      <p style={styles.paragraph}>
        WanderWorld is your trusted travel companion — built to help you explore, discover, and experience new destinations with ease. 
        Whether you're planning a weekend getaway or a luxury vacation, WanderWorld brings you the best travel deals and experiences all in one place.
      </p>

      <p style={styles.paragraph}>
        We’re passionate about making travel stress-free, exciting, and accessible for everyone. 
        Our curated packages are designed to suit every kind of traveler — from adventurers to beach lovers, culture seekers to foodies.
      </p>

      <h2 style={styles.subheading}>✨ Why Choose WanderWorld?</h2>
      <ul style={styles.list}>
        <li> Trusted tour partners across the globe</li>
        <li> Unique and handpicked destinations</li>
        <li> Budget-friendly and luxury packages</li>
        <li>📞 24/7 Customer Support</li>
      </ul>

      <p style={styles.paragraph}>
        Thank you for choosing WanderWorld. Let’s make your next journey unforgettable! ✈️
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
  },
  quote: {
  fontSize: '1.3rem',
  fontStyle: 'italic',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '20px 0 40px',
  color: '#444',
  lineHeight: '1.6',
},

  banner: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '2.8rem',
    color: '#5d6f8fff',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.8rem',
    marginTop: '40px',
    color: '#444',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.7',
    marginBottom: '20px',
    textAlign: 'justify',
  },
  list: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginTop: '10px',
    paddingLeft: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    margin: '25px 0',
  }
};

export default About;
