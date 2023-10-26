import React, { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import FetchPicturesWithQuery from 'api/PicturesApi';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { LoadMoreBtn } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

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
    this.setState({
      query: e.target.search.value,
    });
  };
  async componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await FetchPicturesWithQuery(
          this.state.page,
          this.state.query
        );
        if (!totalHits) {
          console.log('No results by your query');
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
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
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
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery
          pictures={pictures}
          handleOpenModal={this.handleOpenModal}
        />
        {loadMore && <LoadMoreBtn onClick={this.handleLoadMore} />}
        {modalOpen && (
          <Modal
            closeModal={this.handleOpenModal}
            currentAlt={currentAlt}
            currentImg={currentImg}
          />
        )}
      </div>
    );
  }
}
