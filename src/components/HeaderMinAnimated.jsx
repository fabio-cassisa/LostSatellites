//Header of the website
import { LogoBlack } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const HeaderMinAnimated = () => {
  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
  };
  
  return (
    <header className="header-menu">
        <nav className="header-menu-nav">
          <LogoBlack />
          <a onClick={() => scrollToSection('a')} className="menu-element">ABOUT US</a>
          <a onClick={() => scrollToSection('s')} className="menu-element">SERVICES</a>
          <a onClick={() => scrollToSection('c')} className="menu-element">CONTACTS</a>
          <a onClick={() => scrollToSection('j')} className="menu-element">JOIN US</a>
        </nav>
    </header>
  )
}
