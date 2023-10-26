import React from 'react';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="submit" className="button" onClick={onClick}>
      <span className="button-label">Load more</span>
    </button>
  );
};
