import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as CrossIcon } from 'static/img/cross.svg';
import css from './Modal.module.css';

import AddCardForm from 'components/AddCardForm/AddCardForm';

class Modal extends Component {
    render() {
        const { onCreateCard, onCloseModal } = this.props;

        return ReactDOM.createPortal(
            <div className={css.backdrop}>
                <div className={css.modal}>

                    <button className={css.buttonClose} onClick={onCloseModal}>
                        <CrossIcon className={css.buttonIcon}/>
                    </button>

                    <AddCardForm onCreateCard={onCreateCard} />
                    
                </div>
            </div>,
            document.body
        );
    }
}

export default Modal;