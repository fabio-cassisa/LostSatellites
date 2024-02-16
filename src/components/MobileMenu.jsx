import React, { useState } from 'react';
import { LogoMinInverted } from "../assets/SVGassets";
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
    // Close the menu after clicking on a section
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-menu">
      <header className="header-menu">
        <nav className="header-menu-nav">
          <LogoMinInverted onClick={() => scrollToSection('home')}/>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='menu-mob'>
                <path fill="#000000" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='menu-mob'>
                <path fill="#000000" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </div>
        </nav>
      </header>
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <a onClick={() => scrollToSection('services')} className="menu-element">services</a>
            <a onClick={() => scrollToSection('eve')} className="menu-element">eod</a>
            <a onClick={() => scrollToSection('join')} className="menu-element">join</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
