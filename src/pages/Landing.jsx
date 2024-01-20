import React from 'react'
import { Header } from '../components/Header'
import { HeaderMinAnimated } from '../components/headerMinAnimated'
import { AnimatedTitle } from '../components/AnimatedTitle'

function Landing() {
  return (
    <div className='main-wrapper'>
        <Header />
        <section id='a' className='about-section'></section>
        <section id='s' className='services-section'>
          <AnimatedTitle text={"EQUIPAGGIO"} />
        </section>
        <section id='c' className='contacts-section'></section>
        <section id='j' className='join-section'></section>
    </div>
  )
}

export default Landing