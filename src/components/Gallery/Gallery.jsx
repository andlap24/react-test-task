import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

export const Gallery = ({ images, handleImage }) => (
  <div className="App__gallery gallery">
    {images.map(image => (
      <div
        className="gallery__btn"
        key={image.image_id}
        role="button"
        onClick={() => handleImage(image.image_id)}
        tabIndex={0}
        onKeyPress={() => handleImage(image.image_id)}
      >
        <img
          className="gallery__image"
          src={image.src}
          alt="landscape"
        />
      </div>
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleImage: PropTypes.func.isRequired,
};
