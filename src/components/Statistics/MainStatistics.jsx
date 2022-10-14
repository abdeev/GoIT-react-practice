import React, { useState, useEffect } from 'react';
import StatCard from './StatitisticCards';
import css from './StatisticsStyles.module.css';

import { ButtonModal } from 'components/ButtonModal/ButtonModal';
import { Modal } from 'components/Modal/Modal';

const localStorage = () => {
  return JSON.parse(window.localStorage.getItem('statsElements'));
};

export const StatCompon = () => {
  const [statsElements, setStatsElements] = useState(
    () => localStorage() ?? []
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const LSSetData = JSON.stringify(statsElements);

    window.localStorage.setItem('statsElements', LSSetData);
  }, [statsElements]);

  const hendelIncreaseCounter = id => {
    const newElArr = statsElements.map(el => {
      if (el.id === id) {
        return { ...el, count: (el.count += 1) };
      }
      return el;
    });
    setStatsElements(newElArr);
  };

  const handleDecreaseCounter = id => () => {
    const x = statsElements.find(el => el.id === id);

    if (!x.count) {
      return;
    }

    const newElArr = statsElements.map(el => {
      if (el.id === id) {
        return { ...el, count: (el.count -= 1) };
      }
      return el;
    });
    setStatsElements(newElArr);
  };

  const handleResetCounter = id => {
    return () => {
      const newElArr = statsElements.map(el => {
        if (el.id === id) {
          return { ...el, count: 0 };
        }
        return el;
      });
      setStatsElements(newElArr);
    };
  };

  const handleDeleteCard = id => {
    const filteredCards = statsElements.filter(el => el.id !== id);
    setStatsElements(filteredCards);
  };

  const handleCreateCard = cardObj => {
    setStatsElements([cardObj, ...statsElements]);
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.statistics_wrapper}>
      <h1 className={css.statistics_header}>Main statistics</h1>
      {/* <AddCardForm onCreateCard={this.handleCreateCard} /> */}

      <ButtonModal actionOpenModal={handleOpenModal} />

      <div className={css.statistics_cards_wrapper}>
        {statsElements.map(({ id, title, count }) => (
          <StatCard
            id={id}
            title={title}
            count={count}
            key={id}
            hendlIncreaseClick={hendelIncreaseCounter}
            handleDeleteCard={handleDeleteCard}
            handleDecreaseCounter={handleDecreaseCounter(id)}
            handleResetCounter={handleResetCounter(id)}
          />
        ))}
      </div>

      {showModal && (
        <Modal
          onCreateCard={handleCreateCard}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};
