import React from 'react';
import { useSelector } from 'react-redux';

import { StyledCarousel, StyledCarouselImages } from './styles/carousel';

const Carousel = ({ images, id }) => {
  const { theme } = useSelector((state) => state);

  return (
    <StyledCarousel>
      {images.map((image) => (
        <StyledCarouselImages key={id}>
          <img
            src={image}
            alt=''
            style={{ filter: theme ? 'invert(1)' : 'invert(0)' }}
          />
        </StyledCarouselImages>
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
