import React from 'react'
import { Header } from '../components/Header'
import { HeaderMinAnimated } from '../components/headerMinAnimated'

function Landing() {
  return (
    <div className='main-wrapper'>
        <HeaderMinAnimated />
        <section id='a' className='about-section'></section>
        <section id='s' className='services-section'></section>
        <section id='c' className='contacts-section'></section>
        <section id='j' className='join-section'></section>
    </div>
  )
}

export default Landing