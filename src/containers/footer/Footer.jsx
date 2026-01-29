import React from 'react'
import './footer.css'
import GPT3 from "../../assets/GPT-3.svg"
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer__about">
        <div className="gpt3__footer__about-company">
          <img src={GPT3} alt="gpt3logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer__about__container">
          <div className="gpt3__footer__about-sections">
            <p>Links</p>
            <a href="">Overons</a>
            <a href="">Social Media</a>
            <a href="">Counters</a>
            <a href="">Contact</a>
          </div>
          <div className="gpt3__footer__about-sections">
            <p>Company</p>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Contact</a>
          </div>
          <div className="gpt3__footer__about-sections">
            <p>Get in touch</p>
            <a href="">Crechterwoord K12 182 DK Alknjkcb</a>
            <a href="">085-132567</a>
            <a href="">info@payme.net</a>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
