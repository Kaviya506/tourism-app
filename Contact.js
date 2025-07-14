import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    alert(`Thank you ${name}, we’ll get back to you soon!`);
    e.target.reset();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      <div style={styles.infoBox}>
        <p><strong>Email:</strong> wanderworld@travel.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required style={styles.input} />
        <input type="email" name="email" placeholder="Your Email" required style={styles.input} />
        <textarea name="message" placeholder="Your Message" required style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ad5ca1ff',
    marginBottom: '20px',
  },
  infoBox: {
    marginBottom: '30px',
    fontSize: '1.2rem',
    color: '#333',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    height: '120px',
  },
  button: {
    backgroundColor: '#b137abff',
    color: '#fff',
    padding: '10px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default Contact;
