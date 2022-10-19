import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AllCards } from 'pages/AllCards/AllCards';
import { FavorietsCards } from 'pages/FavorietsCards/FavorietsCards';

import css from './StatisticsStyles.module.css';

import { ButtonModal } from 'components/ButtonModal/ButtonModal';
import { Modal } from 'components/Modal/Modal';

const localStorage = () => {
  return JSON.parse(window.localStorage.getItem('statsElements'));
};

export const StatCompon = () => {
  const [statsElements, setStatsElements] = useState(localStorage() ?? []);
  const [showModal, setShowModal] = useState(false);
  const [favouriteCard, setFavouriteCard] = useState([]);

  useEffect(() => {
    const LSSetData = JSON.stringify(statsElements);

    window.localStorage.setItem('statsElements', LSSetData);
  }, [statsElements]);

  const handelIncreaseCounter = id => {
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

  const handleAddFavourite = id => {
    const card = statsElements.find(el => el.id === id);
    const favCard = favouriteCard.find(el => el.id === id);
    if (!card) return;
    if (favCard) {
      setFavouriteCard(prev => prev.filter(favCard => favCard.id !== id));
      return;
    }
    setFavouriteCard(prev => [...prev, card]);
  };
  return (
    <div className={css.statistics_wrapper}>
      <h1 className={css.statistics_header}>Main statistics</h1>

      <ButtonModal actionOpenModal={handleOpenModal} />
      <nav className={css.nav}>
        <NavLink to="/" end className={css.navBtn}>
          All cards
        </NavLink>
        <NavLink to="/favoriets" className={css.navBtn}>
          Favourites cards
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <AllCards
              items={statsElements}
              handelIncreaseCounter={handelIncreaseCounter}
              handleDeleteCard={handleDeleteCard}
              handleDecreaseCounter={handleDecreaseCounter}
              handleResetCounter={handleResetCounter}
              handleAddFavourite={handleAddFavourite}
            />
          }
        />
        <Route
          path="/favoriets"
          element={
            <FavorietsCards
              cards={favouriteCard}
              handelIncreaseCounter={handelIncreaseCounter}
              handleDeleteCard={handleDeleteCard}
              handleDecreaseCounter={handleDecreaseCounter}
              handleResetCounter={handleResetCounter}
              handleAddFavourite={handleAddFavourite}
            />
          }
        />
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
