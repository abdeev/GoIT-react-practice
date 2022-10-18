import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AllCards } from 'pages/AllCards/AllCards';
import { FavorietsCards } from 'pages/FavorietsCards/FavorietsCards';

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

      <ButtonModal actionOpenModal={handleOpenModal} />
      <nav className={css.nav}>
        <Link to="/" className={css.navBtn}>
          All cards
        </Link>
        <Link to="/favoriets" className={css.navBtn}>
          Favoriets cards
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <AllCards
              items={statsElements}
              hendelIncreaseCounter={hendelIncreaseCounter}
              handleDeleteCard={handleDeleteCard}
              handleDecreaseCounter={handleDecreaseCounter}
              handleResetCounter={handleResetCounter}
            />
          }
        />
        <Route path="/favoriets" element={<FavorietsCards />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {showModal && (
        <Modal
          onCreateCard={handleCreateCard}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};
