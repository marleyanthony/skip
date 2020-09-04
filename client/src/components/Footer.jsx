import React from 'react';
import '../styles/partials/_footer.scss';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className='footer'>
      <ul className='footer__list'>
          <li className='footer__list-item'>Go-Getters</li>
          <li className='footer__list-item'>About Us</li>
          <li className='footer__list-item'>Blog</li>
        </ul>

      <div>
        <Link to='https://www.facebook.com/'>
          <img className='footer__logo'></img>
        </Link>

        <Link to='https://www.instagram.com/'>
          <img className='footer__logo'></img>
        </Link>
      </div>
    </footer>
    </>
  )
}

export default Footer;
