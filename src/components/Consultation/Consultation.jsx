
import './Consultation.css'; // Import CSS file for styling

const Consultation = () => {
  return (
    <section className="consultation-section">
      <div className="consultation-background"></div>
      <div className="consultation-content">
        <div className="form-container">
          <h2>Consultation</h2>
          <form className="consultation-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Contact" required />
            <select required>
              <option value="">Select Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              {/* Add more options if needed */}
            </select>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          {/* Add more contact details if needed */}
        </div>
      </div>
    </section>
  );
};

export default Consultation;
