import React, { useEffect } from 'react';
import gsap from 'gsap';
import { LeftBracket, RightBracket } from '../assets/SVGassets';

export const AnimatedTitle = ({ text }) => {
    useEffect(() => {
        const headerTimeline = gsap.timeline();

        // Initially set the left bracket and hide the text
        headerTimeline.set('.left-bracket', { scaleX: 1, x: '0%', transformOrigin: '0% 50%' })
                      .set('.right-bracket', { scaleX: 1, x: '-100%', transformOrigin: '100% 50%' })
                      .set('.title-text', { opacity: 0, y: '100%' });

        // Animation to open the right bracket, revealing the text
        headerTimeline.to('.right-bracket', { scaleX: 1, x: '0%', duration: 0.5, ease: 'power2.out' })
                      .to('.title-text', { opacity: 1, y: '0%', duration: 0.5, ease: 'power2.out' }, "+=0.25"); // Starts after the right bracket animation

    }, []);

    return (
        <div className="animated-title">
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
