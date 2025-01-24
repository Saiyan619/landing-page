import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS for the carousel

const ImgCarousel = () => {
  const images = [
    {
      src: "./5b68266cf109cfb76fd95be9_image-slider-01.jpg",
      alt: "Random Nature 1",
      legend: "Legend 1"
    },
    {
      src: "./5b6828cd23db9d2325f990e6_image-slider-02.jpg",
      alt: "Random Nature 2",
      legend: "Legend 2"
    },
    {
      src: "./5b68282b5b239dea0e369316_image-slider-03.jpg",
      alt: "Random Nature 3",
      legend: "Legend 3"
    },
    // {
    //   src: "https://source.unsplash.com/random/800x600?beach",
    //   alt: "Random Nature 4",
    //   legend: "Legend 4"
    // }
  ];

  return (
    <Carousel showArrows={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
