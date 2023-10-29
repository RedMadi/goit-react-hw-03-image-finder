import React from 'react';
import { ImageItemStyled, ImageStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures, handleOpenModal }) => {
  return pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImageItemStyled key={id}>
      <ImageStyled
        src={webformatURL}
        alt={tags}
        onClick={() => handleOpenModal(largeImageURL, tags)}
      />
    </ImageItemStyled>
  ));
};
