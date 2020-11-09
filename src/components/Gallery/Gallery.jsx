import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

export const Gallery = ({ images, handleImage }) => (
  <div className="App__gallery gallery">
    {images.map(image => (
      <img
        key={image.image_id}
        src={image.src}
        className="gallery__image"
        alt="landscape"
        onClick={() => handleImage(image.image_id)}
      />
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
