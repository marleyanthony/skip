import React from 'react'

function WhoWeAre() {
  return (
    <>
      <section className="who-we-are">
        <div className="who-we-are__header-wrapper">
          <h2 className="who-we-are__header">Who We Are</h2>
          <p className="who-we-are__slogan">
            A sustainable solution for your food delivery needs.
          </p>
        </div>

        <div className="who-we-are__steps">
          <div className="who-we-are__step-1">
            <h5 className="who-we-are__step-1-header">Step 1:</h5>
            <p className="who-we-are__step-1-content">
              Use our bins to store all food-delivery waste.
            </p>
            <img src="" alt="" className="who-we-are__step-1-img" />
          </div>

          <div className="who-we-are__step-2">
            <h5 className="who-we-are__step-2-header">Step 2:</h5>
            <p className="who-we-are__step-2-content">
              Schedule your pickup.
            </p>
            <img src="" alt="" className="who-we-are__step-1-img" />
          </div>

          <div className="who-we-are__step-3">
            <h5 className="who-we-are__step-3-header">Step 3:</h5>
            <p className="who-we-are__step-3-content">
              Based on your location, the waste will be picked up and dropped off in one of our centralized pick-up waste station.
            </p>
            <img src="" alt="" className="who-we-are__step-1-img" />
          </div>

          <div className="who-we-are__step-4">
            <h5 className="who-we-are__step-4-header">Step 4:</h5>
            <p className="who-we-are__step-4-content">
              Collect points with our loyalty program every time you check off the sustainability option with your food delivery service provider!
            </p>
            <img src="" alt="" className="who-we-are__step-1-img" />
          </div>

          <button className="who-we-are__get-started-btn btn btn-primary">Get Started</button>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre
