import useIsMobile from '../hooks/useIsMobile'
import { HeaderMinAnimated } from '../components/HeaderMinAnimated'
import { OrbitaAnimatedTitle } from '../components/OrbitaAnimatedTitle'
import { Footer } from '../components/Footer'
import { FooterMobile } from '../components/FooterMobile'
import { EveOfVertical, FullLogoVerticalMob, LeftBracketOutline, LogoVertical, LogoVerticalFooter, Rectangle01, Rectangle02, Rectangle03, Rectangle04, Rectangle05, RightBracketOutline, Rome2024 } from '../assets/SVGassets'
import { GalassieAnimatedTitle } from '../components/GalassieAnimatedTitle'
import { HomeAnimation } from '../components/HomeAnimation'


function Landing() {
  const isMobile = useIsMobile();

  return (
    <div className='main-wrapper'>
        <HeaderMinAnimated />
        <section id='home' className='home-section'>
          <HomeAnimation />
          <div className='sx-side-graphic'>
            <Rectangle01 />
            <LogoVertical />
            <Rectangle01 />
            {isMobile ? (
              <OrbitaAnimatedTitle 
              leftBracket={{ scaleX: 1, x: '0%' }} 
              rightBracket={{ scaleX: 1, x: '-1100%' }}
              />
            ) : (
              <OrbitaAnimatedTitle 
              leftBracket={{ scaleX: 1, x: '0%' }} 
              rightBracket={{ scaleX: 1, x: '-975%' }}
              />
            )}
            {!isMobile && <Rectangle02 />}
          </div>
          <img className='color01' src="color01.png" alt="graphic01 on the right side" />
        </section>
        <section id='services' className='services-section'>
          {isMobile ? (
            <div className='rect-pink-mob'>
              <GalassieAnimatedTitle
                text={"GALASSIE"}
                leftBracket={{ scaleX: 1, x: '500%' }} 
                rightBracket={{ scaleX: 1, x: '0%' }} 
                />
              <img className='color02' src="color02.png" alt="graphic02 on the left side" />
              <Rome2024 />
            </div>
          ) : (
            <div className='galassie-wrapper'>
            <div className='rect-pink'>
            <img className='color02' src="color02.png" alt="graphic02 on the left side" />
            </div>
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
        <section id='eve' className='eve-section'>
          <div className='eve-content-wrapper'>
            <p className='eve-description'>
                Il nostro progetto di punta è <strong> Eve of Destruction</strong>,<br />un videogame action RPG 2D completamente illustrato a mano,<br />
                vincitore del bando Zagarolo Game House (Lazio Innova, 2023).
            </p>
            <div className='eve-main-wrapper'>
                <LeftBracketOutline />
                <img className='ben-gif' src="ben_gif.gif" alt="main character Eve of Destruction" />
                <RightBracketOutline />
            </div>
          </div>
          {isMobile && <EveOfVertical />}
          {!isMobile && (
          <div className='sx-eve-graphic'>
            <Rome2024 />
            <Rectangle05 />
            <EveOfVertical />
            <Rectangle05 />
          </div>
          )}
        </section>
        {!isMobile &&
                <section id='join' className='join-section'>
                <p className='join-links-wrapper'>
                  X<br />
                  Discord<br />
                  Instagram<br />
                  Linkedin<br />
                  Steam<br />
                  Kickstarter<br />
                </p>
            </section>
        }
        {!isMobile ? (
          <section id='join'>
            <Footer />
          </section>
        ) : (
          <FooterMobile />
        )}
    </div>
  )
}

export default Landing