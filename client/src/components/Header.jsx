import React from 'react';
import navLogo from '../assets/icons/recycle-nav.svg';

function Header() {
  return (
    <>
      <nav class="nav navbar navbar-expand-lg navbar-dark">
        <button class="nav__toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="nav__toggler-icon navbar-toggler-icon"></span>
        </button>
        <a class="nav__logo navbar-brand" href="#">
          GoGetters
          <img src={navLogo} alt="nav logo" className="nav__logo-img"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Restaurants</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
