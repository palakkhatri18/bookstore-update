import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/005/587/780/non_2x/realistic-border-of-melted-butter-or-ghee-for-food-packaging-design-stock-realistic-border-of-melted-cheese-or-cheese-fondue-on-a-white-background-free-vector.jpg  ) ' }}>
      <div className="navbar-logo">THE STILTONS</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
