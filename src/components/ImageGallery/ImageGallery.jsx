import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ pictures, handleOpenModal }) => {
  return (
    <ul>
      <ImageGalleryItem pictures={pictures} handleOpenModal={handleOpenModal} />
    </ul>
  );
};
