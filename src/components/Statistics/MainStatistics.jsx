import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AllCards } from 'pages/AllCards/AllCards';
import { FavorietsCards } from 'pages/FavorietsCards/FavorietsCards';

import css from './StatisticsStyles.module.css';

import { ButtonModal } from 'components/ButtonModal/ButtonModal';
import { Modal } from 'components/Modal/Modal';
import NotFound from 'pages/NotFound/NotFound';

import { addCard } from 'redux/slices/cardsSlice';
// import { useDispatch, useSelector } from 'react-redux';



const localStorage = () => {
  return JSON.parse(window.localStorage.getItem('statsElements'));
};

export const StatCompon = () => {
  // const [statsElements, setStatsElements] = useState(localStorage() ?? []);
  const [showModal, setShowModal] = useState(false);
  const [favTotal, setFavTotal] = useState(null);

  // const { cards } = useSelector((state) => state.cards);
  // const dispatch = useDispatch();

  // console.log(cards);
  






  // useEffect(() => {
  //   const LSSetData = JSON.stringify(statsElements);
  //   window.localStorage.setItem('statsElements', LSSetData);
  // }, [statsElements]);

  // const handelIncreaseCounter = (id) => {
  //   const newElArr = statsElements.map(el => {
  //     if (el.id === id) {
  //       return { ...el, count: (el.count += 1) };
  //     }
  //     return el;
  //   });
  //   setStatsElements(newElArr);
  // };

  // const handleDecreaseCounter = (id) => () => {
  //   const x = statsElements.find(el => el.id === id);

  //   if (!x.count) {
  //     return;
  //   }

  //   const newElArr = statsElements.map(el => {
  //     if (el.id === id) {
  //       return { ...el, count: (el.count -= 1) };
  //     }
  //     return el;
  //   });
  //   setStatsElements(newElArr);
  // };

  // const handleResetCounter = (id) => {
  //   return () => {
  //     const newElArr = statsElements.map(el => {
  //       if (el.id === id) {
  //         return { ...el, count: 0 };
  //       }
  //       return el;
  //     });
  //     setStatsElements(newElArr);
  //   };
  // };

  // const handleDeleteCard = (id) => {
  //   const filteredCards = statsElements.filter(el => el.id !== id);
  //   setStatsElements(filteredCards);
  // };

  // const handleCreateCard = (cardObj) => {
  //   dispatch(addCard(cardObj));
    
  //   // setStatsElements([cardObj, ...statsElements]);
  //   setShowModal(false);
  // };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const handleAddFavourite = (id) => {
  //   const newArr = statsElements.map(card => {
  //     if (card.id !== id) {
  //       return card;
  //     }

  //     return { ...card, favorite: !card.favorite };
  //   });
  //   setStatsElements(newArr);
  // };

  // useEffect(() => {
  //   const favLength = statsElements.filter(card => card.favorite).length;
  //   setFavTotal(favLength);
  // }, [statsElements]);

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
        <Route
          path="/"
          element={
            <AllCards
              // items={statsElements}
              // handelIncreaseCounter={handelIncreaseCounter}
              // handleDeleteCard={handleDeleteCard}
              // handleDecreaseCounter={handleDecreaseCounter}
              // handleResetCounter={handleResetCounter}
              // handleAddFavourite={handleAddFavourite}
            />
          }
        />
        <Route
          path="/favoriets"
          element={
            <FavorietsCards
              // cards={statsElements}
              // handelIncreaseCounter={handelIncreaseCounter}
              // handleDeleteCard={handleDeleteCard}
              // handleDecreaseCounter={handleDecreaseCounter}
              // handleResetCounter={handleResetCounter}
              // handleAddFavourite={handleAddFavourite}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showModal && (
        <Modal
          // onCreateCard={handleCreateCard}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};
