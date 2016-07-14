import React from 'react';
import {IndexLink, Link} from 'react-router';

const bold = {fontWeight: 'bold'};

export default (props) => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
        <li>
          <IndexLink to="/" activeClassName="active" activeStyle={bold}>Timer</IndexLink>
        </li>
        <li>
          <Link to="/countdown" activeClassName="active" activeStyle={bold}>Countdown</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">by me!</li>
      </ul>
    </div>
  </div>
);
