import React, { Component } from 'react';
import { ReactComponent as CrossIcon } from 'static/img/cross.svg';
import css from './BoardCard.module.css';

export class BoardCard extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        { id: 'f-1', label: 'food' },
        { id: 'f-2', label: 'coffee' },
        { id: 'f-3', label: 'cheese' },
        { id: 'f-4', label: 'tee' },
        { id: 'f-5', label: 'apple' },
        { id: 'f-6', label: 'banana' },
        { id: 'f-7', label: 'potato' },
      ],
    };
  }

  handleItemDelete = id => {
    return () => {
      const array = this.state.labels.filter(label => label.id !== id);
      this.setState({ labels: array });
    };
  };

  render() {
    const { imgURL, label, title, text, user } = this.props;
    const { avatar, name, time } = user;
    const { labels } = this.state;

    return (
      <div className={css.border}>
        <img className={css.borderImage} src={imgURL} alt={label} />
        <div className={css.labelContainer}>
          {labels.map(label => (
            <span key={label.id} className={css.label}>
              {label.label}
              <CrossIcon
                className={css.buttonIcon}
                onClick={this.handleItemDelete(label.id)}
              />
            </span>
          ))}
        </div>

        <div className={css.cardInfo}>
          <h2 className={css.boarderTitle}>{title}</h2>

          <p className={css.boarderText}>{text}</p>

          <div className={css.boarderProfile}>
            <img
              className={css.boarderAvatar}
              src={avatar}
              alt={`${name} avatar`}
            />
            <div className={css.dataWrapper}>
              <h3 className={css.boarderName}>{name}</h3>
              <span className={css.boarderTime}>{time}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
