import React from 'react'

function Hero() {
  return (
    <>
      <section className="main">
        <div className="main__hero-content-wrapper">
          <h1 className="main__hero-text">A new way to dispose your food packaging.</h1>
          <p className="main__hero-sub-text">
            Building sustainable <br />
            solutions for your food delivery service!
          </p>
        </div>
        <div className="cta-btn-wrapper">
          <button className="main__contact-btn btn btn-primary">Get Started</button>
        </div>
      </section>
    </>
  )
}

export default Hero
