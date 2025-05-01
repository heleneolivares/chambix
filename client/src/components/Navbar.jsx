import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="chambix logo" />
      </div>

      <div className={`navbar-links-container ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/jobs" onClick={() => setIsMenuOpen(false)}>Jobs</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        </ul>
      </div>

      <div className="navbar-actions">
        <Link to="/login" className="login-button">Login</Link>
        <div className="post-job">
          <button>Post a Job</button>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        role='button'
        aria-label='toggle menu'
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(!isMenuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
