import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/packages');
  };

  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Discover New Destinations</h1>
        <p style={styles.subheading}>Explore the world with WanderWorld</p>
        <button style={styles.button} onClick={handleExploreClick}>Explore Now</button>
      </div>
    </div>
  );
};

const styles = {
 hero: {
    height: '100vh',
   backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(77, 68, 68, 0.5)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '1rem',
    backgroundColor: '#63b7c0ff',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    transition: '0.3s',
  }
};

export default Home;
