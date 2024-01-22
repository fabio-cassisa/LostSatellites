import { ArrowUp, FullLogoWhite } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Footer = () => {
    const scrollToSection = (sectionId) => {
        gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
      };

  return (
    <footer className="footer-container">
        <FullLogoWhite onClick={() => scrollToSection('h')} className="menu-element" />
        <h3 className="language">EN/IT</h3>
        <ArrowUp />
    </footer>
  )
}
