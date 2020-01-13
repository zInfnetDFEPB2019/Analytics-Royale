import React from 'react';
import './style.css';

const bottomBar = () => {
  return (
    <footer className="page-footer purple darken-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Analytics Royale</h5>
            <p className="grey-text text-lighten-4">
              Fast and precise Clash Royale profile information.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Main Page
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2014 Copyright Text</div>
      </div>
    </footer>
  );
};

export default bottomBar;
