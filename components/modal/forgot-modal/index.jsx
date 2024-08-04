"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import { Modal, Fade, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const ForgotPasswordModal = ({ open, toggle }) => {
  const handlePasswordReset = () => {
    // Parolni tiklash funksiyasini shu yerga qo'shing
    toggle();
  };

  return (
    <Modal
      open={open}
      onClose={toggle}
      closeAfterTransition
    >
      <Fade in={open}>
        <ModalContent>
          <h2>Parolni tiklash</h2>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" onClick={handlePasswordReset}>Yuborish</Button>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

ForgotPasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const ModalContent = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
`;

export default ForgotPasswordModal;
