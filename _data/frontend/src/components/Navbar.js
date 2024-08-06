import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/new-make-tracking">New Make Tracking</Link></li>
      <li><Link to="/retail-whisky-collection">Retail Whisky Collection</Link></li>
    </ul>
  </nav>
);

export default Navbar;
