import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mall, hospital, classroom } from '../assets';

const SliderHero = () => {
  const images = [mall, hospital, classroom];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [headingOpacity, setHeadingOpacity] = useState(1); // New state for heading opacity

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imageRef.current, {
      scale: 2,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextImage = () => {
    setIsTransitioning(true);
    setHeadingOpacity(0); // Start fading out the heading
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
      setTimeout(() => {
        setHeadingOpacity(1); // Fade in the heading with a delay
      }, 500); // Adjust this delay to synchronize with the image transition
    }, 1000);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setHeadingOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsTransitioning(false);
      setTimeout(() => {
        setHeadingOpacity(1);
      }, 200);
    }, 1000);
  };

  const renderHeadingForCurrentImage = () => {
    const headings = [
      "Let AREF help you Navigate with ease",
      "Elevating patient care with AREF's instant support",
      "Classroom Directions Made Easy with AREF"
    ];

    return (
      <h1 className="h7 mb-10 z-10 absolute top-[42%] xl:top-[60%] sm:top-[50%] left-[40%] transform -translate-x-1/2"
          style={{ transition: 'opacity 0.7s ease-in-out', opacity: headingOpacity }}>
        {headings[currentImageIndex]}
      </h1>
    );
  };

  const gradientOverlayStyle = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '200%',
    background: 'linear-gradient(to top, rgba(15, 12, 21, 1) 0%, rgba(15, 12, 21, 0) 100%)',
    zIndex: 2,
  };

  return (
    <div className="overflow-hidden relative h-[39rem] xl:h-[60rem]">
      <div style={gradientOverlayStyle}></div>
      {renderHeadingForCurrentImage()}
      <img
        style={{ transition: 'opacity 1s ease-in-out', opacity: isTransitioning ? 0 : 1, position: 'absolute', top: 0, left: 0, minWidth: '100%', minHeight: '100%', objectFit: 'cover' }}
        ref={imageRef}
        src={images[currentImageIndex]}
        alt="Slider Image"
      />
    </div>
  );
};

export default SliderHero;
