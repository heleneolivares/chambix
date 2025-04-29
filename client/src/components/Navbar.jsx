import React from 'react'
import '../style/Navbar.css'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <img src="/logo.png" alt="chambix logo" />
        </div>
        <ul className='navbar-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Jobs</a></li>
            <li><a href="/jobs">About</a></li>
            <li><a href="/contact">Login</a></li>
        </ul>
        <div className="post-job">
            <button>Post a Job</button>
        </div>
    </nav>
  );
}
