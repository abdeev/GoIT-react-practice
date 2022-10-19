import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/AddCardForm/AddCardForm.module.css';

export const AddCardForm = ({ onCreateCard }) => {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  const handleTitle = evt => {
    setTitle(evt.currentTarget.value);
  };

  const handleCount = evt => {
    setCount(+evt.currentTarget.value.replace(/[^0-9]/g, ''));
  };

  const handleCreateCard = () => {
    if (!title) {
      alert('title not provided');
      return;
    }

    const card = {
      id: nanoid(),
      title: title,
      count: count,
      favorite: false,
      totalCards: 0,
      totalFavCards: 0,
    };

    onCreateCard(card);
    setTitle('');
    setCount(0);
  };

  useEffect(() => {
    const handleListenKey = e => {
      if (e.key === 'Enter') handleCreateCard();
    };

    window.addEventListener('keydown', handleListenKey);

    return () => window.removeEventListener('keydown', handleListenKey);
    // eslint-disable-next-line
  }, [title, count]);

  return (
    <div className={css.inputWrapper}>
      <input
        type="text"
        className={css.addCardInput}
        onChange={handleTitle}
        value={title}
        placeholder="Enter name of items"
      />
      <input
        type="text"
        className={css.addCardInput}
        onChange={handleCount}
        value={count}
      />
      <button
        type="button"
        className={css.addCardButton}
        onClick={handleCreateCard}
      >
        Create
      </button>
    </div>
  );
};
