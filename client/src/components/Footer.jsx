import React from 'react';
import '../styles/partials/_footer.scss';
import Wave from '../assets/imgs/footer-wave.svg';
import Facebook from '../assets/logos/facebook.svg';
import Twitter from '../assets/logos/twitter.svg';
import Instagram from '../assets/logos/instagram.svg';

function Footer() {
  return (
    <>
    <img src={Wave}></img>
    <footer className='footer'>
        <ul className='footer__list'>
            <li className='footer__list-item'>Go-Getters</li>
            <li className='footer__list-item'>About Us</li>
            <li className='footer__list-item'>Blog</li>
        </ul>

        <div className='footer__logo-container'>
            <img className='footer__logo' src={Facebook}></img>
            <img className='footer__logo' src={Instagram}></img>
            <img className='footer__logo' src={Twitter}></img>
        </div>
    </footer>
    </>
  )
}

export default Footer;
