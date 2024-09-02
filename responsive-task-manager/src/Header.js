import React from 'react';
import PropTypes from 'prop-types';

function Header({ title = 'Task Manager' }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// Prop types
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;