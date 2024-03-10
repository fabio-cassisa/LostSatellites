import { FullLogoWhite } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Footer = () => {

    const scrollToSection = (sectionId) => {
        gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
      };

  return (
    <footer className="footer-container">
        <FullLogoWhite onClick={() => scrollToSection('home')} className="menu-element" />
        <div className="footer-join-content">
          <p><a href="mailto:lostsatellitestudio@gmail.com">lostsatellitestudio@gmail.com</a></p>
          <p>P:IVA 17457521007</p>
        </div>
    </footer>
  )
}
