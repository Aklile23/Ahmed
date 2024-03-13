import React, { useRef, useEffect } from 'react';
import Section from './Section';
import Heading from './Heading';
import Ahmed from '../assets/Ahmed.mp4'

const Demo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            },
            { threshold: 0.5 } // Adjust this value based on how much of the video should be in view to autoplay
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);
    return (
        <Section id="demo">
            <div className='container mt-6'>
                <Heading
                    tag="Intro"
                    title="Who is Aref?"
                />
                <video className="h-full w-full rounded-lg" controls ref={videoRef}>
                    <source src={Ahmed} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </Section>
      );
}

export default Demo;
