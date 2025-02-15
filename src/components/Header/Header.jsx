import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
