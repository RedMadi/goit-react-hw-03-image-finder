import React from 'react';

export const ImageGalleryItem = ({ pictures, handleOpenModal }) => {
  return pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => handleOpenModal(largeImageURL, tags)}
      />
    </li>
  ));
};
