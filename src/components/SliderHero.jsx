import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mall, hospital, classroom } from '../assets';

const SliderHero = () => {
  const images = [mall, hospital, classroom];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 1000);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 1000);
  };

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

  const imageStyles = {
    transition: 'opacity 1s ease-in-out',
    opacity: isTransitioning ? 0 : 1,
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
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
    <div className="overflow-hidden relative">
      <div style={gradientOverlayStyle}></div>
      <img
        style={{ ...imageStyles, position: 'relative', zIndex: 1 }} // Position the image relatively
        ref={imageRef}
        className="scale-[1.7] translate-y-[8%] md:scale-[1.2] pt-20 mt-12 md:-translate-y-[10%] lg:-translate-y-[23%]"
        src={images[currentImageIndex]}
        alt="Slider Image"
      />
    </div>
  );
};

export default SliderHero;
