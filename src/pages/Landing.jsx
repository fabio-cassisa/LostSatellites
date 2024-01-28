import React from 'react'
import { Header } from '../components/Header'
import { HeaderMinAnimated } from '../components/headerMinAnimated'
import { AnimatedTitle } from '../components/AnimatedTitle'
import { OrbitaAnimatedTitle } from '../components/OrbitaAnimatedTitle'
import { Footer } from '../components/Footer'
import { LeftBracket, LeftBracketColored, LogoVertical, Rectangle01, Rectangle02, Rectangle03, Rectangle04, RightBracketColored } from '../assets/SVGassets'

function Landing() {
  return (
    <div className='main-wrapper'>
        <HeaderMinAnimated />
        <section id='h' className='home-section'>
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
        <section id='s' className='services-section'>
          <div className='galassie-wrapper'>
            <div className='rect-pink'></div>
              <div className='dx-side-graphic'>
                <Rectangle03 />
                <AnimatedTitle text={"GALASSIE"} 
                leftBracket={{ scaleX: 1, x: '500%' }} 
                rightBracket={{ scaleX: 1, x: '0%' }} 
                />
                <Rectangle04 />
              </div>
          </div>
        </section>
        <section id='c' className='contacts-section'>
          <AnimatedTitle text={"CONTACTS"}
          leftBracket={{ scaleX: 1, x: '0' }} 
          rightBracket={{ scaleX: 1, x: '-500%' }} 
          />
        </section>
        <section id='j' className='join-section'>
          <AnimatedTitle text={"JOIN US"} 
          style={{ paddingRight: '0%' }} 
          leftBracket={{ scaleX: 1, x: '500%' }} 
          rightBracket={{ scaleX: 1, x: '0%' }} 
          />
        </section>
        <Footer />
    </div>
  )
}

export default Landing