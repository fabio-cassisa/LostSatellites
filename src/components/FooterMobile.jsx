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
        <div className="footer-join-content">
                  <FullLogoWhite onClick={() => scrollToSection('home')} className="menu-element" />
                  <div>
                  <p><a href="mailto:lostsatellitestudio@gmail.com">lostsatellitestudio@gmail.com</a></p>
                  <p>P:IVA 17457521007</p>
                  </div>
        </div>
        <div className='join-links-wrapper'>
                <div className="links-footer">
                  <a href='https://twitter.com/LostSatelliteSt'>X</a>
                  <a href='https://discord.com/invite/29rbyfsp'>Discord</a>
                  <a href='https://www.instagram.com/lostsatellite.studio'>Instagram</a>
                  <a href='https://linkedin.com'>Linkedin</a>
                  <a href='https://store.steampowered.com'>Steam</a>
                </div>
        </div>
    </footer>
  )
}