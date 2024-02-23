import useIsMobile from '../hooks/useIsMobile'
import { FullLogoWhite } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Footer = () => {
    const isMobile = useIsMobile();

    const scrollToSection = (sectionId) => {
        gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
      };

  return (
    <footer className="footer-container">
        {!isMobile && <FullLogoWhite onClick={() => scrollToSection('home')} className="menu-element" />}
        <h3 className="language">Rome, 2024</h3>
        <div className="footer-join-content">
          <h3>JOIN US:</h3>
          <p><a href="mailto:info@lostsatellitestudio.com">info@lostsatellitestudio.com</a></p>
        </div>
    </footer>
  )
}
