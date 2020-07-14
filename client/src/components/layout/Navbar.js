import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>
            <i class='fas fa-home'></i> Home
          </Link>
          <Link to='/login'>
            <i class='fas fa-sign-in-alt'></i> Login
          </Link>
          <Link to='/register'>
            <i class='fas fa-fingerprint'></i> Register
          </Link>
          <Link to='/about'>
            <i class='far fa-question-circle'></i> About
          </Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'far fa-address-card',
};

export default Navbar;
