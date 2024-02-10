import { FullLogoVerticalMob, FullLogoWhite } from "../assets/SVGassets"
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const FooterMobile = () => {
    const scrollToSection = (sectionId) => {
        gsap.to(window, { duration: 1.5, scrollTo: `#${sectionId}`, ease: 'power2.inOut' });
      };

  return (
    <footer className="footer-container">
        <p className='join-links-wrapper'>
                <FullLogoVerticalMob />
                  X<br />
                  Discord<br />
                  Instagram<br />
                  Linkedin<br />
                  Steam<br />
                  Kickstarter<br />
        </p>
        <div className="footer-join-content">
          <h3>JOIN US:</h3>
          <p>lostsatellitestudio@gmail.com</p>
        </div>
    </footer>
  )
}