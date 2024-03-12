import useIsMobile from '../hooks/useIsMobile';
import { HeaderMinAnimated } from '../components/HeaderMinAnimated'
import { HomeAnimation } from '../components/HomeAnimation'
import { OrbitaAnimatedTitle } from '../components/OrbitaAnimatedTitle'
import { GalassieAnimatedTitle } from '../components/GalassieAnimatedTitle'
import { Footer } from '../components/Footer'
import { FooterMobile } from '../components/FooterMobile'

import {
  EveOfVertical,
  LeftBracket,
  LogoVertical,
  Rectangle01,
  Rectangle02,
  Rectangle03,
  Rectangle04,
  Rectangle05,
  Rectangle06,
  RightBracket,
  Rome2024
} from '../assets/SVGassets';

function Landing() {
  const isMobile = useIsMobile();

  const HomeTitleSection = () => (
    <div className='sx-side-graphic'>
      {isMobile ? (
        <OrbitaAnimatedTitle 
          leftBracket={{ scaleX: 1, x: '0%' }} 
          rightBracket={{ scaleX: 1, x: '-1000%' }}
        />
      ) : (
        <>
          <Rectangle01 />
          <LogoVertical />
          <Rectangle02 />
          <OrbitaAnimatedTitle 
            leftBracket={{ scaleX: 1, x: '0%' }} 
            rightBracket={{ scaleX: 1, x: '-975%' }}
          />
          <Rectangle01 />
        </>
      )}
    </div>
  );

  const ServicesSection = () => (
    <section id='services' className='services-section'>
      <img className='color02' src="color02.png" alt="graphic02 on the left side" />
      {isMobile ? (
        <>
          <GalassieAnimatedTitle
            text={"GALASSIE"}
            leftBracket={{ scaleX: 1, x: '500%' }} 
            rightBracket={{ scaleX: 1, x: '0%' }} 
          />
          <Rome2024 />
        </>
      ) : (
        <div className='galassie-wrapper'>
          <div className='dx-side-graphic'>
            <Rectangle03 />
            <GalassieAnimatedTitle
              text={"GALASSIE"}
              leftBracket={{ scaleX: 1, x: '500%' }} 
              rightBracket={{ scaleX: 1, x: '0%' }} 
            />
            <Rectangle04 />
          </div>
        </div>
      )}
    </section>
  );

  const EveSection = () => (
    <section id='eve' className='eve-section'>
      <div className='eve-content-wrapper'>
        {isMobile ? (
          <>
            <div className='eve-main-wrapper'>
              <LeftBracket />
              <img className='ben-gif' src="ben_gif.gif" alt="main character Eve of Destruction" />
              <RightBracket />
            </div>
            <p className='eve-description'>
              Il nostro progetto di punta è <strong> Eve of Destruction</strong>,<br />un videogame action RPG 2D completamente illustrato a mano,<br />
              vincitore del bando Zagarolo Game House (Lazio Innova, 2023).
            </p>
            <EveOfVertical />
          </>
        ) : (
          <>
            <p className='eve-description'>
              Il nostro progetto di punta è <strong> Eve of Destruction</strong>,<br />un videogame action RPG 2D completamente illustrato a mano,<br />
              vincitore del bando Zagarolo Game House (Lazio Innova, 2023).
            </p>
            <div className='eve-main-wrapper'>
              <LeftBracket />
              <img className='ben-gif' src="ben_gif.gif" alt="main character Eve of Destruction" />
              <RightBracket />
            </div>
          </>
        )}
      </div>
      {!isMobile && (
        <div className='sx-eve-graphic'>
          <Rome2024 />
          <Rectangle05 />
          <EveOfVertical />
          <Rectangle06 />
        </div>
      )}
    </section>
  );

  return (
    <div className='main-wrapper'>
      {!isMobile && <HeaderMinAnimated />}
      <section id='home' className='home-section'>
        <HomeAnimation />
        <HomeTitleSection />
        <img className='color01' src="color01.png" alt="graphic01 on the right side" />
      </section>
      <ServicesSection />
      <EveSection />
      {!isMobile &&
        <section id='join' className='join-section'>
          <div className="links-footer">
            <a href='https://twitter.com/LostSatelliteSt' target='_blank' rel='noopener noreferrer'>X</a>
            <a href='https://discord.com/invite/29rbyfsp' target='_blank' rel='noopener noreferrer'>Discord</a>
            <a href='https://www.instagram.com/lostsatellite.studio' target='_blank' rel='noopener noreferrer'>Instagram</a>
            <a href='https://www.linkedin.com/company/lost-satellite-studio/' target='_blank' rel='noopener noreferrer'>Linkedin</a>
            <a href='https://store.steampowered.com/app/2839460/Eve_of_Destruction/' target='_blank' rel='noopener noreferrer'>Steam</a>
          </div>
          <img className='color03' src="color03.png" alt="graphic03 on the bottom of the page" />
        </section>
      }
      {!isMobile ? (
        <Footer />
      ) : (
        <section id='join'>
          <FooterMobile />
        </section>
      )}
    </div>
  );
}

export default Landing;
