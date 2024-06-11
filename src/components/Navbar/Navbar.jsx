import { useState } from 'react';
import { FaFacebook, FaInstagram, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">MyLogo</div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#jewelry" onClick={toggleMenu}>Jewelry</a>
        <a href="#offer" onClick={toggleMenu}>Offer</a>
        <div className="dropdown">
          <button onClick={toggleDropdown}>
            Services <FaChevronDown className="dropdown-arrow" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#service1" onClick={toggleMenu}>Service 1</a>
              <a href="#service2" onClick={toggleMenu}>Service 2</a>
              <a href="#service3" onClick={toggleMenu}>Service 3</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
