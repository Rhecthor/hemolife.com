import React, { useRef } from 'react'
import './Hero.css'
import { FaXTwitter, FaInstagram, FaDiscord, FaYoutube, FaLinkedin, FaFacebookF } from 'react-icons/fa6'
import heroimg from '../../assets/hemologo.png'

const Hero = () => {
  const imgRef = useRef(null)

  const handleBounce = () => {
    const img = imgRef.current
    img.classList.remove('bounce') // remove if already present
    void img.offsetWidth // trigger reflow to restart animation
    img.classList.add('bounce')
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__subtitle">AI Driven P2P Blood Donation App</h2>
        <h1 className="hero__title">
          <span className="hero__title-red">Donate</span> To Save a Life
        </h1>
        <hr className="hero__divider" />
        <button className="hero__cta-btn">Coming in Hot!</button>
        <div className="hero__community">
          <span>Join the Community</span>
          <div className="hero__socials">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hero__icon"><FaFacebookF /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hero__icon"><FaXTwitter /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hero__icon"><FaInstagram /></a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="hero__icon"><FaDiscord /></a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hero__icon"><FaYoutube /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hero__icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className='HeroImg'>
        <img
          src={heroimg}
          alt='hemolife'
          ref={imgRef}
          onClick={handleBounce}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </section>
  )
}

export default Hero