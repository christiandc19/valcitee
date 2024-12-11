import React, { useRef, useEffect, useState } from 'react';
import './ImageSlider.css';
import { Link } from "react-router-dom";

import Drug_Addiction from '../../assets/program_options_alcoholism.webp';
import Dual_Diagnosis from '../../assets/program_options_dual_diagnosis.webp';
import MAT from '../../assets/program_options_mat.webp';
import Outpatient_Rehab from '../../assets/program_options_outpatient.webp';
import Inpatient_Rehab from '../../assets/program_options_inpatient.webp';

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { src: Drug_Addiction, header: 'Alcohol and Drug Addiction', link: "/addiction-program" },
    { src: Dual_Diagnosis, header: 'Dual Diagnosis', link: "/dual-diagnosis-program" },
    { src: MAT, header: 'Medication Assisted Therapy', link: "/medication-assisted-program" },
    { src: Outpatient_Rehab, header: 'Outpatient', link: "/outpatient-rehab" },
    { src: Inpatient_Rehab, header: 'Inpatient', link: "/inpatient-rehab" },
  ];

  const imagesExtended = [
    images[images.length - 1], // Clone last image
    ...images,
    images[0], // Clone first image
  ];

  useEffect(() => {
    // Preload images
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });

    const slider = sliderRef.current;
    if (!slider) return;

    // Automatically scroll to the first actual image
    scrollToIndex(currentIndex);

    const handleInfiniteScroll = () => {
      const imageWidth = slider.offsetWidth / (window.innerWidth <= 768 ? 1 : 3);
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth - imageWidth * 2;
        setCurrentIndex(images.length);
      } else if (slider.scrollLeft >= slider.scrollWidth - imageWidth) {
        slider.scrollLeft = imageWidth;
        setCurrentIndex(1);
      }
    };

    slider.addEventListener('scroll', handleInfiniteScroll);

    return () => {
      slider.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, [currentIndex]);

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const imageWidth = slider.offsetWidth / (window.innerWidth <= 768 ? 1 : 3);

    slider.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth',
    });

    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleScrollLeft = () => {
    if (isTransitioning) return;

    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length;
    }
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleScrollRight = () => {
    if (isTransitioning) return;

    let newIndex = currentIndex + 1;
    if (newIndex >= images.length + 1) {
      newIndex = 1;
    }
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="slider-container container">
      <h1>Program Options</h1>
      <hr />
      <button
        className="arrow left-arrow"
        onClick={handleScrollLeft}
        disabled={isTransitioning}
      >
        &lt;
      </button>

      <div className="slider" ref={sliderRef}>
        {imagesExtended.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          >
            <Link
              to={image.link}
              onClick={scrollToTop}
              aria-label={`Navigate to ${image.header}`}
            >
              <img
                src={image.src}
                alt={`${image.header} program`}
              />
            </Link>
            <div className="slider-header">{image.header}</div>
          </div>
        ))}
      </div>

      <button
        className="arrow right-arrow"
        onClick={handleScrollRight}
        disabled={isTransitioning}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
