//Header of the website
import { FullLogoWhite } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Header = () => {
  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
  };

  return (
    <header className="header-menu">
        <nav className="header-menu-nav">
          <a onClick={() => scrollToSection('a')} className="menu-element">ABOUT US</a>
          <a onClick={() => scrollToSection('s')} className="menu-element">SERVICES</a>
          <FullLogoWhite onClick={() => scrollToSection('h')} className="menu-element"/>
          <a onClick={() => scrollToSection('c')} className="menu-element">CONTACTS</a>
          <a onClick={() => scrollToSection('j')} className="menu-element">JOIN US</a>
        </nav>
    </header>
  )
}
