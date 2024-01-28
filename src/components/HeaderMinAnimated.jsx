//Header of the website
import { LogoMinInverted } from "../assets/SVGassets"
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
          <LogoMinInverted />
          <div className="links-wrapper">
          <a onClick={() => scrollToSection('a')} className="menu-element">about</a>
          <a onClick={() => scrollToSection('s')} className="menu-element">services</a>
          <a onClick={() => scrollToSection('c')} className="menu-element">eve-of-destruction</a>
          <a onClick={() => scrollToSection('j')} className="menu-element">join-us</a>
          </div>
        </nav>
    </header>
  )
}
