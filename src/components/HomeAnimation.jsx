import React, { useEffect, useRef } from 'react';
import { gsap, Power0 } from 'gsap';
import ScrollMagic from 'scrollmagic';

export const HomeAnimation = () => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline for your animation
    const timeline = gsap.timeline({ paused: true });
  
    // Add your frame-by-frame animation to the timeline with stagger
    timeline.to(
      animationContainerRef.current.children, 
      { opacity: 1, ease: Power0.easeNone, stagger: 0.5 }
    );
    // Add more frames as needed...
  
    // Create a ScrollMagic controller
    const controller = new ScrollMagic.Controller();
  
    // Create a ScrollMagic scene
    new ScrollMagic.Scene({
      triggerElement: animationContainerRef.current,
      triggerHook: 0, // Trigger when the animation container enters the viewport
      duration: timeline.duration() * window.innerHeight, // Duration of the scroll animation
    })
      .setPin(animationContainerRef.current) // Pin the container during the animation
      .on('progress', (e) => {
        // Update the timeline progress based on scroll position
        timeline.progress(e.progress);
      })
      .addTo(controller);
  
    // Cleanup when the component unmounts
    return () => {
      controller.destroy(true);
      timeline.kill();
    };
  }, []);
  

  return (
    <div
      className='home-animation'
      ref={animationContainerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0, // Initial opacity
        overflow: 'hidden',
      }}
    >
      {/* Render your frame-by-frame images here */}
      {Array.from({ length: 10 }, (_, index) => (
        <img
          key={index}
          src={`../src/assets/animation/pirata/${index}_.png`}
          alt={`Frame ${index + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0, // Initial opacity
            zIndex: 10 - index, // Set zIndex to show frames in the correct order
          }}
        />
      ))}
    </div>
  );
};
