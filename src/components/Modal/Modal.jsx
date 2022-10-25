import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as CrossIcon } from 'static/img/cross.svg';
import css from './Modal.module.css';

import { AddCardForm } from 'components/AddCardForm/AddCardForm';

export const Modal = ({ onCreateCard, onCloseModal }) => {
  return ReactDOM.createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.buttonClose} onClick={onCloseModal}>
          <CrossIcon className={css.buttonIcon} />
        </button>

        <AddCardForm onCreateCard={onCreateCard} onCloseModal={onCloseModal} />
      </div>
    </div>,
    document.body
  );
};
