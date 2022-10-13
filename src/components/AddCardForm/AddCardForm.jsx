import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/AddCardForm/AddCardForm.module.css';

export class AddCardForm extends Component {
  state = {
    title: '',
    count: 0,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleListenKey);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleListenKey);
  }
  handleListenKey = e => {
    if (e.key === 'Enter') this.handleCreateCard();
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
      id: nanoid(),
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
          placeholder="Enter name of items"
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
