import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LeftBracket, RightBracket } from '../assets/SVGassets';

gsap.registerPlugin(ScrollTrigger) // Register plugins

export const GalassieAnimatedTitle = ({ text, leftBracket, rightBracket }) => {
  const animatedTitleRef = useRef(null);

  useEffect(() => {
    const animatedTitle = animatedTitleRef.current;

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: animatedTitle,
        start: 'top bottom', // Adjust as needed
        end: '+=600', // Adjust as needed
        toggleActions: 'play none none none',
        once: true, // Animating only once after scrolling through the page.
        markers: false,
        scrub: 0.5,
      },
    });

    // Initially set the left bracket and hide the text
    headerTimeline
      .set('.left-bracket', { ...leftBracket, opacity: 1, transformOrigin: '0% 50%' })
      .set('.right-bracket', { ...rightBracket, opacity: 1, transformOrigin: '0% 50%' })
      .set('.title-text', { opacity: 0, y: '100%' })
      .set('.title-subtext', { opacity: 0, y: '100%' });

    // Animation to open the right bracket, revealing the text
    headerTimeline
      .to('.left-bracket', { opacity: 1, scaleX: 1, x: '0%', duration: 1, delay: 1, ease: 'power2.out' })
      .to('.right-bracket', { opacity: 1, scaleX: 1, x: '0%', duration: 1, ease: 'power2.out' })
      .to('.title-text', { opacity: 1, y: '0%', duration: 0.5, ease: 'power2.out' }, "+=0.30")
      .to('.title-subtext', { opacity: 1, y: '0%', duration: 0.5, ease: 'power2.out' }, "+=0.35"); // Starts after the right bracket animation
  }, [leftBracket, rightBracket]);

  return (
    <div className="animated-title galassie-animated-wrapper" ref={animatedTitleRef}>
        <LeftBracket />
        <div className='title-wrapper'>
          <div className="title-text">{text}</div>
          <div className='title-subtext'>
          Animazione
          <br />
          Graphic design
          <br />
          Illustrazione
          <br />
          Sound design
          <br />
          Game developers
          </div>
        </div>
        <RightBracket />
    </div>
  );
};
