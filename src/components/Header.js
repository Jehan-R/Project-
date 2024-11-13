import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Supermarket</h1>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/featured">Featured</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
