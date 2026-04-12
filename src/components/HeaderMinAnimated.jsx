//Header of the website
import { LogoMinInverted } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const HeaderMinAnimated = () => {
  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  
  return (
    <header className="header-menu">
        <nav className="header-menu-nav">
          <LogoMinInverted onClick={() => scrollToSection('home')} className="menu-element" />
          <div className="links-wrapper">
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="menu-element">services</a>
          <a href="#eve" onClick={(e) => handleNavClick(e, 'eve')} className="menu-element">eod</a>
          <a href="#join" onClick={(e) => handleNavClick(e, 'join')} className="menu-element">join</a>
          </div>
        </nav>
    </header>
  )
}
