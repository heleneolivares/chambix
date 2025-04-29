import React, { useState } from 'react';
import '../style/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="chambix logo" />
      </div>

      {/* Links */}
      <div className={`navbar-links-container ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>

      {/* Botones */}
      <div className="navbar-actions">
        <a href="/login" className="login-button">Login</a>
        <div className="post-job">
          <button>Post a Job</button>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
