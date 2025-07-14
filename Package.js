import React, { useState } from 'react';

const packages = [
  {
    title: 'Maldives Escape',
    description: 'Experience the crystal-clear waters and luxury resorts of Maldives.',
    price: '₹1,50,000',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Paris Adventure',
    description: 'Explore the Eiffel Tower, croissants, and beautiful cityscapes.',
    price: '₹2,00,000',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Goa Getaway',
    description: 'Relax on the beaches and enjoy vibrant nightlife in Goa.',
    price: '₹35,000',
    image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80',
  }
];

const Package = () => {
  const [activeForm, setActiveForm] = useState(null); // tracks which card shows the form

  const handleBooking = (e, destination) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;

    alert(`Thank you ${name}! Your trip to ${destination} on ${date} has been booked. Confirmation sent to ${email}.`);
    e.target.reset();
    setActiveForm(null); // close form after submission
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Tour Packages</h1>
      <div style={styles.grid}>
        {packages.map((pkg, index) => (
          <div key={index} style={styles.card}>
            <img src={pkg.image} alt={pkg.title} style={styles.image} />
            <h2>{pkg.title}</h2>
            <p>{pkg.description}</p>
            <p style={styles.price}>{pkg.price}</p>

            {activeForm === index ? (
              <form onSubmit={(e) => handleBooking(e, pkg.title)}>
                <input type="text" name="name" placeholder="Your Name" required style={styles.input} />
                <input type="email" name="email" placeholder="Email" required style={styles.input} />
                <input type="date" name="date" required style={styles.input} />
                <button type="submit" style={styles.button}>Confirm Booking</button>
              </form>
            ) : (
              <button onClick={() => setActiveForm(index)} style={styles.button}>
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '2.5rem',
    color: '#008CBA',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  price: {
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginTop: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#008CBA',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default Package;
