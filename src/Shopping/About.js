import React from 'react';
import "./about.css"

const About = () => {
  return (
    <div className="about-page">
      <h1>Welcome to Groovy Store!!</h1>
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          [Share the story of how your business started. Include personal
          anecdotes or pivotal moments that inspired the creation of your
          store. Highlight your values and principles.]
        </p>
      </section>

      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <p>
          At [Your E-commerce Store Name], we offer a wide range of [describe
          your products or services]. From [mention a few key product
          categories] to [highlight any unique services or product features],
          we aim to [solve a problem, cater to a specific need, etc.].
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to [state your mission statement or core values]. We
          strive to [describe the impact you aim to make, whether it's
          supporting communities, promoting sustainability, etc.].
        </p>
      </section>

      {/* Add other sections like 'Why Choose Us?', 'Join Us in Making a Difference', 'Get in Touch', etc. */}

      <section className="contact">
        <h2>Get in Touch</h2>
        <p>
          Have questions, feedback, or just want to say hello? Reach out to us
          at [contact information].
        </p>
      </section>
    </div>
  );
};

export default About;
