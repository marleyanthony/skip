import React from 'react'

function Hero() {
  return (
    <>
      <section className="main">
        <h1 className="main__hero-text">Hero Text</h1>
        <div className="cta-btn-wrapper">
          <button className="main__contact-btn btn btn-primary">Contact Us</button>
          <button className="main__contact-btn btn btn-primary">Order With Us</button>
        </div>
      </section>
    </>
  )
}

export default Hero
