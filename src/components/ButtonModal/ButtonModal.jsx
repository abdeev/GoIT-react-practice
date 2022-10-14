import React from 'react';
import css from './ButtonModal.module.css';

export const ButtonModal = ({ actionOpenModal }) => {
  return (
    <button className={css.button} onClick={actionOpenModal}>
      Add card
    </button>
  );
};
