import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 47;
const PRELOAD_BATCH = 10;

const currentFrame = (index) => `/animation/pirata/${index}_.png`;

export const HomeAnimation = () => {
  const animationContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameCache = useRef({});
  const currentFrameIndex = useRef(0);

  // Preload first N frames on mount for smoother initial scroll
  useEffect(() => {
    for (let i = 0; i < PRELOAD_BATCH; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        frameCache.current[i] = img;
        // Draw the first frame once loaded
        if (i === 0 && contextRef.current) {
          drawFrame(img);
        }
      };
    }
  }, []);

  const drawFrame = (img) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context || !img) return;

    // Clear and draw maintaining aspect ratio, centered
    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, drawX, drawY;

    if (imgRatio > canvasRatio) {
      // Image is wider — fit height, crop sides
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    } else {
      // Image is taller — fit width, crop top/bottom
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    }

    context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  // Size canvas to container on mount + resize
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = animationContainerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      contextRef.current = canvas.getContext('2d');

      // Redraw current frame after resize
      const img = frameCache.current[currentFrameIndex.current];
      if (img) drawFrame(img);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // ScrollTrigger for frame animation
  useEffect(() => {
    const handleScrollUpdate = (self) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.ceil(self.progress * FRAME_COUNT)
      );

      if (frameIndex === currentFrameIndex.current) return;
      currentFrameIndex.current = frameIndex;

      if (frameCache.current[frameIndex]) {
        drawFrame(frameCache.current[frameIndex]);
      } else {
        const img = new Image();
        img.src = currentFrame(frameIndex);
        img.onload = () => {
          frameCache.current[frameIndex] = img;
          // Only draw if still the current frame (avoid stale draws)
          if (currentFrameIndex.current === frameIndex) {
            drawFrame(img);
          }
        };
      }
    };

    const tl = gsap.timeline({ ease: 'none' });
    tl.to(animationContainerRef.current, { opacity: 1, duration: 1 });

    ScrollTrigger.create({
      id: 'animation-trigger',
      trigger: animationContainerRef.current,
      start: 'top top',
      end: `+=${FRAME_COUNT * window.innerHeight * 0.05}`,
      pin: animationContainerRef.current,
      onUpdate: handleScrollUpdate,
    });

    return () => {
      ScrollTrigger.getById('animation-trigger')?.kill();
    };
  }, []);

  return (
    <div className="animation-container" ref={animationContainerRef}>
      <canvas
        className="animation-canvas"
        ref={canvasRef}
      />
    </div>
  );
};
