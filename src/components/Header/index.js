import React from 'react';
import Navigation from '../Navigation/index.js';

function Header() {
  return (
    <header className='flex-row'>
      <h2>
        <a data-testid="link" href="/">
          Joshua Weisbrod-Torres
        </a>
      </h2>
      <Navigation />
    </header>
  )
}

export default Header;