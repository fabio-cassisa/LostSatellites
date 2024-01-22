import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LeftBracket, RightBracket } from '../assets/SVGassets';

gsap.registerPlugin(ScrollTrigger);

export const AnimatedTitle = ({ text, style, leftBracket, rightBracket }) => {
  const animatedTitleRef = useRef(null);

  useEffect(() => {
    const animatedTitle = animatedTitleRef.current;

    gsap.to(animatedTitle, {
      opacity: 1,
      scrollTrigger: {
        trigger: animatedTitle,
        start: 'top center', // Adjust as needed
        end: '+=150', // Adjust as needed
        toggleActions: 'play none none none',
        scrub: 1,
        markers: true, // Setting the markers for testing! TO BE REMOVED.
        once: true, // Animating only once after scrolling through the page.
      },
    });

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: animatedTitle,
        start: 'top center', // Adjust as needed
        end: '+=150', // Adjust as needed
        toggleActions: 'play none none none',
        once: true, // Animating only once after scrolling through the page.
      },
    });

    // Initially set the left bracket and hide the text
    headerTimeline
      .set('.left-bracket', { ...leftBracket, transformOrigin: '0% 50%' })
      .set('.right-bracket', { ...rightBracket, transformOrigin: '0% 50%' })
      .set('.title-text', { opacity: 0, y: '100%' });

    // Animation to open the right bracket, revealing the text
    headerTimeline
      .to('.left-bracket', { scaleX: 1, x: '0%', duration: 1.5, ease: 'power2.out' })
      .to('.right-bracket', { scaleX: 1, x: '0%', duration: 1.5, ease: 'power2.out' })
      .to('.title-text', { opacity: 1, y: '0%', duration: 0.5, ease: 'power2.out' }, "+=0.25"); // Starts after the right bracket animation
  }, [leftBracket, rightBracket]);

  return (
    <div className="animated-title" style={{ opacity: 0, ...style }} ref={animatedTitleRef}>
      <div className="left-bracket">
        <LeftBracket />
      </div>
      <div className="title-text">{text}</div>
      <div className="right-bracket">
        <RightBracket />
      </div>
    </div>
  );
};
