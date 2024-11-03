import React from 'react';
import {ModalOverlay, ModalContainer, CloseButton} from './Modal.styles';

const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
