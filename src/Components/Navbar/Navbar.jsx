import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaRegEnvelope } from 'react-icons/fa6'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="navbar">
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
        <div className="navbar__logo">
          <span className="navbar__logo-text">Hem🩸life</span>
        </div>
        <ul className="navbar__links">
          <li className="navbar__link navbar__link--active">Home</li>
          <li className="navbar__link">About</li>
          <li className="navbar__link">Careers</li>
          <li className="navbar__link">Blog</li>
        </ul>
        <div className="navbar__right">
          <button className="navbar__msg-btn" aria-label="Messages">
            <FaRegEnvelope />
          </button>
          <button className="navbar__contact-btn">Contact Us</button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'open' : ''}`}>
        <div className="navbar__drawer-content">
          <button
            className="navbar__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul>
            <li className="navbar__drawer-link navbar__link--active">Home</li>
            <li className="navbar__drawer-link">About</li>
            <li className="navbar__drawer-link">Careers</li>
            <li className="navbar__drawer-link">Blog</li>
            <li>
              <button className="navbar__drawer-contact-btn">Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
      {/* Overlay for closing */}
      {menuOpen && <div className="navbar__drawer-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}

export default Navbar