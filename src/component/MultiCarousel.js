import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function MultiCarousel({ children }) {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 1.5s"
      transitionDuration={500}
      containerClass="carousel-container experience mb-4"
      // removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style experience"
      itemClass="carousel-item-padding-40-px"
      minimumTouchDrag={0}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
      {children}
    </Carousel>
  );
}

export default MultiCarousel;
