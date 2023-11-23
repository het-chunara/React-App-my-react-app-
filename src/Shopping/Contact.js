import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Feel free to reach out to us via email, phone, or visit our physical
          store location.
        </p>
        <div className="info">
          <div>
            <strong>Email:</strong> contact@yourstore.com
          </div>
          <div>
            <strong>Phone:</strong> +1234567890
          </div>
          <div>
            <strong>Address:</strong> 123 Store Street, City, Country
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
