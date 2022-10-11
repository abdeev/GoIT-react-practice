import React, { Component } from 'react';
import css from 'components/AddCardForm/AddCardForm.module.css';

export class AddCardForm extends Component {
  state = {
    title: '',
    count: 0,
  };

  handleTitle = evt => {
    this.setState({ title: evt.currentTarget.value });
  };

  handleCount = evt => {
    this.setState({
      count: +evt.currentTarget.value.replace(/[^0-9]/g, ''),
    });
  };

  handleCreateCard = () => {
    if (!this.state.title) {
      alert('title not provided');
      return;
    }

    const card = {
      id: Date.now(),
      title: this.state.title,
      count: this.state.count,
    };

    this.props.onCreateCard(card);

    this.setState({ title: '', count: 0 });
  };

  render() {
    return (
      <div className={css.inputWrapper}>
        <input
          type="text"
          className={css.addCardInput}
          onChange={this.handleTitle}
          value={this.state.title}
        />
        <input
          type="text"
          className={css.addCardInput}
          onChange={this.handleCount}
          value={this.state.count}
        />
        <button
          type="button"
          className={css.addCardButton}
          onClick={this.handleCreateCard}
        >
          Create
        </button>
      </div>
    );
  }
}

export default AddCardForm;
