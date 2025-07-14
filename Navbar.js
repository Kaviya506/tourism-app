import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>🌍 WanderWorld</Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/packages" style={styles.link}>Packages</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#008CBA',
    padding: '10px 20px',
    color: '#fff'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff'
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem'
  }
};

export default Navbar;
