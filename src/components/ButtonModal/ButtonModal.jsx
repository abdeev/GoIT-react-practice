import React, { Component } from 'react';
import css from './ButtonModal.module.css';

class ButtonModal extends Component {
    render() {
        const { actionOpenModal } = this.props;

        return (
            <button className={css.button} onClick={actionOpenModal}>Add card</button>
        );
    }
}

export default ButtonModal;