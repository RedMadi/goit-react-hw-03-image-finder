import React from 'react';
import {
  SearchBarStyled,
  SearchButtonLabel,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';
export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarStyled className="searchbar">
      <SearchForm className="form" onSubmit={onSubmit}>
        <SearchFormButton type="submit" className="button">
          <SearchButtonLabel className="button-label">Search</SearchButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarStyled>
  );
};
