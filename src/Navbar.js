import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
    <div className='navbar'>
    


        <div className="navbar-logo" onClick={handleLogoClick}>
          <img 
            src="https://www.scholastic.ca/geronimostilton/img/header-geronimo-books.png" 
            alt="Geronimo Stilton Logo"
          />
        </div>

        <nav className="navbar-ab">
              <div className="navbar-title">THE STILTONS</div>
        
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="/books" onClick={toggleNavbar}>Books</Link></li>
          <li><Link to="/about" onClick={toggleNavbar}>About</Link></li>
          <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleNavbar}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

      </nav>
      </div>
   
    <div className='navbar-spacer'></div>
    </>
  );
};

export default Navbar;
