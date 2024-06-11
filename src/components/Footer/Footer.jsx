
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src="https://via.placeholder.com/150" alt="Logo" className="footer-logo" />
          <p className="phone-number"><FaPhoneAlt /><a href="tel:+11234567890"> (123) 456-7890</a></p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#service1">Service 1</a></li>
            <li><a href="#service2">Service 2</a></li>
            <li><a href="#service3">Service 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#jewelry">Jewelry</a></li>
            <li><a href="#offer">Offer</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li><FaPhoneAlt /><a href="tel:+11234567890"> (123) 456-7890</a></li>
            <li><FaEnvelope /><a href="mailto:contact@example.com"> contact@example.com</a></li>
            <li><FaMapMarkerAlt /> <a href="https://maps.google.com">1234 Street Name, City, State, 12345</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
