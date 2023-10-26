import React, { Component } from 'react';
import { StyledModal } from './Modal.styled';

export default class Modal extends Component {
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };
  handleImageClick = e => {
    e.stopPropagation();
  };

  componentDidMount() {
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <StyledModal onClick={this.props.closeModal}>
        <div className="modal">
          <img
            src={this.props.currentImg}
            alt={this.props.currentAlt}
            onClick={this.handleImageClick}
          />
        </div>
      </StyledModal>
    );
  }
}
