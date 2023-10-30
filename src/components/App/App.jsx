import React, { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import FetchPicturesWithQuery from 'api/PicturesApi';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { LoadMoreBtn } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { AppStyled } from './App.styled';

export default class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    loadMore: false,
    modalOpen: false,
    currentImg: null,
    currentAlt: null,
  };

  handleSubmit = async e => {
    e.preventDefault();
    const searchValue = e.target.search.value;

    if (!searchValue) {
      console.log('Enter some query to find');
      return;
    }
    if (this.state.query !== searchValue) {
      this.setState(
        prev => ({
          query: searchValue,
          page: 1,
          pictures: [],
        }),
        () => e.target.reset()
      );
    } else {
      console.log(`You already queried a ${this.state.query}`);
      e.target.reset();
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({ isLoading: true });
      this.handleFetchPicturesWithQuery();
    }
  }
  async handleFetchPicturesWithQuery() {
    try {
      const { hits, totalHits } = await FetchPicturesWithQuery(
        this.state.page,
        this.state.query
      );
      if (!totalHits) {
        console.log('No results by your query');
        this.setState({
          isLoading: false,
        });
        return;
      }
      this.setState(prev => ({
        pictures: [...prev.pictures, ...hits],
        loadMore: prev.page < Math.ceil(totalHits / 12),
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  handleLoadMore = () => {
    if (this.state.loadMore) {
      this.setState(prev => ({ page: prev.page + 1 }));
    }
  };

  handleOpenModal = (img, alt) => {
    this.setState(prev => ({
      modalOpen: !prev.modalOpen,
      currentImg: img,
      currentAlt: alt,
    }));
  };
  render() {
    const { pictures, isLoading, loadMore, modalOpen, currentAlt, currentImg } =
      this.state;

    return (
      <AppStyled>
        <SearchBar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery
          pictures={pictures}
          handleOpenModal={this.handleOpenModal}
        />
        {pictures.length > 0 && loadMore && (
          <LoadMoreBtn onClick={this.handleLoadMore} />
        )}

        {modalOpen && (
          <Modal
            closeModal={this.handleOpenModal}
            currentAlt={currentAlt}
            currentImg={currentImg}
          />
        )}
      </AppStyled>
    );
  }
}
