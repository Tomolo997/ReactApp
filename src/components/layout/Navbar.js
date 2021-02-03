import React from 'react';
import PropTypes from 'prop-types';

//v argumente funkcije oddamo props
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i href="#" className={icon} style={styleGithubFinder} />

        {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
const styleGithubFinder = {
  marginRight: '5px',
};
export default Navbar;
