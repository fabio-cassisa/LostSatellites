import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HomeAnimation = () => {
  const animationContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [frameLoaded, setFrameLoaded] = useState([]);
  const frameCount = 47;

  const currentFrame = (index) => `/animation/pirata/${index}_.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    const handleScrollUpdate = () => {
      const trigger = ScrollTrigger.getById('animation-trigger');
      if (trigger && context) {
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(trigger.progress * frameCount)
        );
        if (!frameLoaded[frameIndex]) {
          const img = new Image();
          img.src = currentFrame(frameIndex);
          img.onload = () => {
            context.drawImage(img, 0, 0);
            setFrameLoaded((prev) => ({
              ...prev,
              [frameIndex]: true,
            }));
          };
        }
      }
    };

    const tl = gsap.timeline({ ease: 'none' });
    tl.to(animationContainerRef.current, { opacity: 1, duration: 1 });

    ScrollTrigger.create({
      id: 'animation-trigger',
      trigger: animationContainerRef.current,
      start: 'top top',
      end: `+=${frameCount * window.innerHeight * 0.05}`,
      pin: animationContainerRef.current,
      onUpdate: handleScrollUpdate,
    });

    return () => {
      ScrollTrigger.getById('animation-trigger').kill();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;
  }, []);

  return (
    <div className="animation-container" ref={animationContainerRef}>
      <canvas
        className="animation-canvas"
        ref={canvasRef}
        width='1920'
        height='1080'
      />
    </div>
  );
};
