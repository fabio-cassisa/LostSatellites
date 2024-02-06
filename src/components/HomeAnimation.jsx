import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger separately

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const HomeAnimation = () => {
  const animationContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameCount = 47;

  const currentFrame = (index) => `/animation/pirata/${index}_.png`;

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ ease: 'none' });
    tl.to(animationContainerRef.current, { opacity: 1, duration: 1 });

    // ScrollMagic scene
    ScrollTrigger.create({
      trigger: animationContainerRef.current,
      start: 'top top',
      end: `+=${frameCount * window.innerHeight * 0.05}`,
      pin: animationContainerRef.current,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(self.progress * frameCount)
        );

        const img = new Image();
        img.src = currentFrame(frameIndex);

        // Draw image directly without waiting for onload
        contextRef.current.drawImage(img, 0, 0);
      },
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Preload initial image
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    const img = new Image();
    img.src = currentFrame(0);

    img.onload = () => {
      context.drawImage(img, 0, 0);
    };
  }, []);

  return (
    <>
    <div className="animation-container" ref={animationContainerRef}>
      <canvas
        className="animation-canvas"
        ref={canvasRef}
        width='1920'
        height='1080'
      />
    </div>
    <div className="fill-orbita-animation"></div>
    </>
  );
};
