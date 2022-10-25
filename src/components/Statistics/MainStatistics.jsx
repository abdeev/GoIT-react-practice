import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AllCards } from 'pages/AllCards/AllCards';
import { FavorietsCards } from 'pages/FavorietsCards/FavorietsCards';
import { useSelector } from 'react-redux';
import { ButtonModal } from 'components/ButtonModal/ButtonModal';
import { Modal } from 'components/Modal/Modal';
import NotFound from 'pages/NotFound/NotFound';

import css from './StatisticsStyles.module.css';

export const StatCompon = () => {
  const [showModal, setShowModal] = useState(false);
  const [favTotal, setFavTotal] = useState(null);
  const cards = useSelector(state => state.cards.cards);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const favLength = cards.filter(card => card.favorite).length;
    setFavTotal(favLength);
  }, [cards]);

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
          {!!favTotal && <b className={css.favCounter}>{favTotal}</b>}
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<AllCards />} />
        <Route path="/favoriets" element={<FavorietsCards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showModal && <Modal onCloseModal={handleCloseModal} />}
    </div>
  );
};
