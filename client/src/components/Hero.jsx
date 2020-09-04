import React from 'react';
import heroImg from '../assets/imgs/hero-img.png'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__hero-content-wrapper">
          <h3 className="hero__hero-text">A new way to dispose your food packaging.</h3>
          <p className="hero__hero-sub-text">
            Building sustainable <br />
            solutions for your food delivery service!
          </p>
        </div>
        <div className="hero__cta-btn-wrapper mx-auto">
          <button className="hero__hero-cta-btn btn mx-auto">Get Started</button>
        </div>
      </section>
      <div className="hero__img-wrapper">
        <svg className="hero__top-circle">
          <circle cx="40" cy="40" r="40" stroke-width="3" fill="#4C956C" />
        </svg>
        <img src={heroImg} alt="courier" className="hero__img" />
        <svg height="100" width="100" className="hero__bottom-circle">
          <circle cx="50" cy="50" r="40" stroke-width="3" fill="#4C956C" />
        </svg>
      </div>
    </>
  )
}

export default Hero
