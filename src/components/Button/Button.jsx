import React from 'react';
import { ButtonStyled } from './Button.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <ButtonStyled type="submit" className="button" onClick={onClick}>
      <span className="button-label">Load more</span>
    </ButtonStyled>
  );
};
