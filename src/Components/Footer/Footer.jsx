import React from 'react'
import './Footer.css'
import { FaXTwitter, FaInstagram, FaDiscord, FaYoutube, FaLinkedin, FaFacebookF } from 'react-icons/fa6'

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">
      <div className="footer__brand">
        <div className="footer__logo">
          <span className="footer__logo-icon">🩸</span>
          <span className="footer__logo-h">H</span>
        </div>
        <div className="footer__brand-name">Hemolife</div>
        <div className="footer__desc">AI Driven P2P Blood Donation App</div>
      </div>
      <div className="footer__links">
        <div className="footer__col">
          <div className="footer__col-title">Company</div>
          <a href="#" className="footer__link">Home</a>
          <a href="#" className="footer__link">About</a>
          <a href="#" className="footer__link">Careers</a>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">Legal</div>
          <a href="#" className="footer__link">FAQs</a>
          <a href="#" className="footer__link">Privacy Policies</a>
          <a href="#" className="footer__link">Terms & Conditions</a>
        </div>
      </div>
    </div>
    <hr className="footer__divider" />
    <div className="footer__bottom">
      <div>
        <span className="footer__community-title">Join the Community</span>
        <div className="footer__socials">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer