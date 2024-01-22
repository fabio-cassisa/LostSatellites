import React from 'react'
import { Header } from '../components/Header'
import { HeaderMinAnimated } from '../components/headerMinAnimated'
import { AnimatedTitle } from '../components/AnimatedTitle'
import { Footer } from '../components/Footer'

function Landing() {
  return (
    <div className='main-wrapper'>
        <Header />
        <section id='h' className='home-section'></section>
        <section id='a' className='about-section'>
          <AnimatedTitle text={"EQUIPAGGIO"} 
          leftBracket={{ scaleX: 1, x: '0%' }} 
          rightBracket={{ scaleX: 1, x: '-550%' }}
          />
        </section>
        <section id='s' className='services-section'>
          <AnimatedTitle text={"GALASSIE"} 
          style={{ paddingRight: '0%' }} 
          leftBracket={{ scaleX: 1, x: '500%' }} 
          rightBracket={{ scaleX: 1, x: '0%' }} 
          />
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