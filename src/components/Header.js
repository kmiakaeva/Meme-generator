import React from 'react';
import logo from '../image/meme-logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__meme-logo"
        src={logo}
        alt="Meme Generator Logo"
      ></img>
      <h2 className="header__title">Meme Generator</h2>
      <h3 className="header__subtitle">React Course</h3>
    </header>
  );
}
