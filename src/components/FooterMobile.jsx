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
        <div className='join-links-wrapper'>
                <FullLogoVerticalMob onClick={() => scrollToSection('home')}/>
                <div className="links-footer">
                  <a href='https://twitter.com/LostSatelliteSt'>X</a>
                  <a href='https://discord.com/invite/29rbyfsp'>Discord</a>
                  <a href='https://www.instagram.com/lostsatellite.studio'>Instagram</a>
                  <a href='https://linkedin.com'>Linkedin</a>
                  <a href='https://store.steampowered.com'>Steam</a>
                </div>
        </div>
        <div className="footer-join-content">
          <h3>JOIN US:</h3>
          <p><a href="mailto:info@lostsatellitestudio.com">info@lostsatellitestudio.com</a></p>
        </div>
    </footer>
  )
}