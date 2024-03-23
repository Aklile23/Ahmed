import React, { useState, useEffect } from 'react';
import { mall, hospital, classroom } from "../assets";
import Button from './Button';

const SliderHero = () => {
  const images = [mall, hospital, classroom];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
    const slideInterval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const imageStyles = {
    transition: 'opacity 2s ease-in-out',
    opacity: isTransitioning ? 0 : 1,
  };
  return (
    <div className="slider-hero max-h-25 mt-20 sm:mt-28 md:mt-32 lg:mt-40 xl:mt-90">
      <img
        className="scale-[1.7] translate-y-[8%] md:scale-[1.2] pt-20 mt-12 md:-translate-y-[10%] lg:-translate-y-[23%]"
        style={imageStyles}
        src={images[currentImageIndex]}
        alt="Slider Image"
        width={1730}
      />
    </div>
  );
};

export default SliderHero;
