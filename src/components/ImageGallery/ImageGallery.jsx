import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
export const ImageGallery = ({ pictures, handleOpenModal }) => {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem pictures={pictures} handleOpenModal={handleOpenModal} />
    </ImageGalleryStyled>
  );
};
