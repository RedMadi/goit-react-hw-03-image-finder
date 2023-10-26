import { styled } from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .modal {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;
