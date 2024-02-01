import React from 'react'
import { HeaderMinAnimated } from '../components/headerMinAnimated'
import { OrbitaAnimatedTitle } from '../components/OrbitaAnimatedTitle'
import { Footer } from '../components/Footer'
import { EveOfVertical, LeftBracketOutline, LogoVertical, LogoVerticalFooter, Rectangle01, Rectangle02, Rectangle03, Rectangle04, Rectangle05, RightBracketOutline, Rome2024 } from '../assets/SVGassets'
import { GalassieAnimatedTitle } from '../components/GalassieAnimatedTitle'
import { HomeAnimation } from '../components/HomeAnimation'


function Landing() {
  return (
    <div className='main-wrapper'>
         <HeaderMinAnimated /> 
        <section id='home' className='home-section'>
         {/* <HomeAnimation /> */}
          <div className='sx-side-graphic'>
            <Rectangle01 />
            <LogoVertical />
            <Rectangle01 />
            <OrbitaAnimatedTitle 
            leftBracket={{ scaleX: 1, x: '0%' }} 
            rightBracket={{ scaleX: 1, x: '-1020%' }}
            />
            <Rectangle02 />
          </div>
        </section>
        <section id='services' className='services-section'>
          <div className='galassie-wrapper'>
            <div className='rect-pink'></div>
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
        </section>
        <section id='eve' className='eve-section'>
          <div className='sx-eve-graphic'>
            <Rome2024 />
            <div className='eve-text-wrapper'>
              <Rectangle05 />
              <p className='eve-description'>
              Il nostro progetto di punta è <strong> Eve of Destruction</strong>,<br />un videogame action RPG 2D completamente illustrato a mano,<br />
              vincitore del bando Zagarolo Game House (Lazio Innova, 2023).
              </p>
            </div>
            <EveOfVertical />
            <Rectangle05 />
            <LogoVerticalFooter />
            <div className='eve-main-wrapper'>
              <LeftBracketOutline />
              <img src="../src/assets/ben.png" alt="main character Eve of Destruction" />
              <RightBracketOutline />
            </div>
          </div>
        </section>
        <section id='join' className='join-section'>
        </section>
        <Footer />
    </div>
  )
}

export default Landing