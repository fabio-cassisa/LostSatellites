import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LeftBracketColored, RightBracketColored } from '../assets/SVGassets';

gsap.registerPlugin(ScrollTrigger);

export const OrbitaAnimatedTitle = ({ leftBracket, rightBracket }) => {
  const animatedTitleRef = useRef(null);

  useEffect(() => {
    const animatedTitle = animatedTitleRef.current;

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: animatedTitle,
        start: 'top bottom', // Adjust as needed
        end: '+=600', // Adjust as needed
        toggleActions: 'play none none none',
        scrub: 0.5,
        once: true, // Animating only once after scrolling through the page.
        markers: false,
      },
    });

    // Initially set the left bracket and hide the text
    headerTimeline
      .set('.left-bracket-col', { ...leftBracket, opacity: 1, transformOrigin: '0% 50%' })
      .set('.right-bracket-col', { ...rightBracket, opacity: 1, transformOrigin: '0% 50%' })
      .set('.benv-orbita-text', { opacity: 0, y: '100%' })
      .set('.benv-orbita-subtext', { opacity: 0, y: '100%' });


    // Animation to open the right bracket, revealing the text
    headerTimeline
      .to('.left-bracket-col', { opacity: 1, scaleX: 1, x: '0%', duration: 1, ease: 'power2.out' })
      .to('.right-bracket-col', { opacity: 1, scaleX: 1, x: '0%', duration: 1, delay: 0.5, ease: 'power2.out' })
      .to('.benv-orbita-text', { opacity: 1, y: '0%', duration: 0.5, ease: 'power2.out' }, "+=0.30") 
      .to('.benv-orbita-subtext', { opacity: 1, y: '0%', duration: 0.5, ease: 'power2.out' }, "+=0.35");// Starts after the right bracket animation
  }, [leftBracket, rightBracket]);

  return (
    <div className="animated-title" ref={animatedTitleRef}>
        <LeftBracketColored />
            <div className='benv-orbita-wrapper'>
            <div className='benv-orbita-text'>BENVENUTO<div>IN ORBITA</div></div>
            <div className='benv-orbita-subtext'>Tutta la creatività di cui hai bisogno<div>in un unico spazio.</div></div>
            </div>
        <RightBracketColored />
    </div>
  );
};
