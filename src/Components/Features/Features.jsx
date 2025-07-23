import React from 'react'
import './Features.css'
import bell from '../../assets/bell.jpg'
import chat from '../../assets/chat.jpg'
import arrows from '../../assets/arrows.jpg'
import puzzle from '../../assets/puzzle.jpg'

const Features = () => (
  <section className="features">
    <div className="features__container">
      <h2 className="features__title">App Features</h2>
      <p className="features__subtitle">Check out the amazing app features</p>
      <div className="features__grid">
        <div className="features__column">
          <div className="features__item">
            <img src={bell} alt="Donation Reminders" className="features__icon" />
            <div>
              <div className="features__item-title">Donation Reminders</div>
              <div className="features__item-desc">
                Timely alerts for eligible donors to schedule a blood donation.
              </div>
            </div>
          </div>
          <div className="features__item">
            <img src={chat} alt="HemoChat" className="features__icon" />
            <div>
              <div className="features__item-title">HemoChat</div>
              <div className="features__item-desc">
                Human-AI interaction on blood-related matters.
              </div>
            </div>
          </div>
        </div>
        <div className="features__divider"></div>
        <div className="features__column">
          <div className="features__item">
            <img src={arrows} alt="Peer-to-Peer Blood Donation" className="features__icon" />
            <div>
              <div className="features__item-title">Peer-to-Peer Blood Donation</div>
              <div className="features__item-desc">
                Peer-to-Peer blood donation connects donors with recipients, facilitating blood donations and urgent medical support.
              </div>
            </div>
          </div>
          <div className="features__item">
            <img src={puzzle} alt="Proximity Matching" className="features__icon" />
            <div>
              <div className="features__item-title">Proximity Matching</div>
              <div className="features__item-desc">
                Connect donors with nearby blood collection centers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  
)

export default Features