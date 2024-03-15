//Header of the website
import { LogoMinInverted } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const HeaderLogoOnly = () => {
  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
  };
  
  return (
    <header className="header-menu">
        <nav className="header-menu-nav">
          <LogoMinInverted onClick={() => scrollToSection('home')} className="menu-element" />
        </nav>
    </header>
  )
}