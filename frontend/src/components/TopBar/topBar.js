import React from 'react';
import './style.css';

const topBar = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-1">
        <a href="#" className="brand-logo">
          Analytics Royale
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default topBar;
