import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// Default props
Header.defaultProps = {
  title: 'Task Manager'
};

// Prop types
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
