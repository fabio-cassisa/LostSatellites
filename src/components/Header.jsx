//Header of the website
import { Logo } from "../assets/SVGassets"
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
          <Logo />
          <a onClick={() => scrollToSection('j')} className="menu-element">JOIN US</a>
          <a onClick={() => scrollToSection('c')} className="menu-element">CONTACTS</a>
        </nav>
    </header>
  )
}
