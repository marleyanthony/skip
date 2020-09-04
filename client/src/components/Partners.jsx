import React from 'react'
import '../styles/partials/_partners.scss';
import Logo1 from '../assets/images/partner-1.svg';
import Logo2 from '../assets/images/partner-2.svg';
import Logo3 from '../assets/images/partner-3.svg';
import Logo4 from '../assets/images/partner-4.svg';
import Logo5 from '../assets/images/partner-5.svg';
import Logo6 from '../assets/images/partner-6.svg';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function Partners() {
  return (
    <>
      <section className="partners">
          <h2 className="partners__header">Partner Companies</h2>
          <p className="partners__content">
            Our feature is used by hundreds of restaurants & delivery companies across Canada.
          </p>

          <div className="partners__logo-container">
            <img className="partners__logo partners__logo--1" src={Logo1}></img>

            <img className="partners__logo partners__logo--2" src={Logo2}></img>
            <img className="partners__logo partners__logo--3" src={Logo3}></img>
            <img className="partners__logo partners__logo--4" src={Logo4}></img>
            <img className="partners__logo partners__logo--5" src={Logo5}></img>
            <img className="partners__logo partners__logo--6" src={Logo6}></img>
          </div>

          <div className="partners__contact-container">
            <h3 className="partners__subheader">Interested in partnering with us?</h3>

            <button className="partners__btn">Contact Us</button>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Partners
