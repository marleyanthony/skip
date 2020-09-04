import React from 'react';
import heroImg from '../assets/imgs/hero-img.jpg'

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
      <img src={heroImg} alt="courier" className="hero__img" />
    </>
  )
}

export default Hero
