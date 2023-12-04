import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';

export const Modal = ({ onModalClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === `Escape`) {
        onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onModalClose]);

  const handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropeClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onModalClose: PropTypes.func,
};