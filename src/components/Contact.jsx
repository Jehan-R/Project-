// src/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <div style={styles.contactInfo}>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>Email:</strong> info@example.com</p>
      </div>
      <div style={styles.messageSection}>
        <h2>Send us a message</h2>
        <form>
          <textarea 
            placeholder="Your message here..." 
            rows="5" 
            style={styles.textArea}
          />
          <br />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  contactInfo: {
    marginBottom: '20px',
  },
  messageSection: {
    marginTop: '20px',
  },
  textArea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Contact;
