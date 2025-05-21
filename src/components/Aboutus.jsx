import React from 'react';
import './styling/Aboutus.css';
import Footer from './Footer';

const Aboutus = () => {
  return (
<div>
<section className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our website! We are passionate about delivering high-quality products and services.
          Our team is dedicated to innovation, creativity, and customer satisfaction.
        </p>

        <div className="about-extra">
          <div className="about-values">
            <h3>Our Core Values</h3>
            <ul>
              <li>🔍 Transparency</li>
              <li>⚡ Innovation</li>
              <li>💬 Communication</li>
              <li>❤️ Customer Focus</li>
            </ul>
          </div>

          <div className="about-mission">
            <h3>Our Motto</h3>
            <p>
              <ol>
                <li>Wear the Spirit, Play with Passion</li>
                <li>Your Game, Your Jersey, Your Identity</li>
                <li>Designed for Champions, Worn by Legends</li>
                <li>Unite Through Sport, Express Through Style</li>
              </ol>
            </p>

            <h3>Our Vision</h3>
            <p>
            Empowering athletes and fans with high-quality, stylish jerseys that inspire confidence, unity, and performance—on and off the field.
            </p>
            <h3>Our Mission</h3>
            <p>To design and produce high-quality, comfortable, and stylish jerseys that enhance performance, foster team spirit, and celebrate individuality—whether on the field or in everyday life.</p>
          </div>

          <div className="about-cta">
            <h3 className='text-red, bg-danger'>Want to know more?</h3>
            <a
  href="https://wa.me/254759092623?text=Hi%20there%2C%20I%20found%20you%20on%20your%20website!"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="learn-more-btn">Text Us here</button>
</a>


          </div>
        </div>
      </div>
    </section>
    <Footer/>
</div>
    
  );
};

export default Aboutus;
