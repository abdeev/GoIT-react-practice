import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards = [...state.cards, action.payload];
    },
    increaseCounter(state, action) {
      const newArray = state.cards.map(card => {
        if (card.id === action.payload) {
          return { ...card, count: (card.count += 1) };
        }
        return card;
      });
      state.cards = newArray;
    },

    decreaseCounter(state, action) {
      const card = state.cards.find(card => card.id === action.payload);

      if (!card.count) {
        return;
      }

      const newArray = state.cards.map(card => {
        if (card.id === action.payload) {
          return { ...card, count: (card.count -= 1) };
        }
        return card;
      });
      state.cards = newArray;
    },

    resetCounter(state, action) {
      const newArray = state.cards.map(card => {
        if (card.id === action.payload) {
          return { ...card, count: 0 };
        }
        return card;
      });
      state.cards = newArray;
    },

    deleteCard(state, action) {
      const filteredCards = state.cards.filter(
        card => card.id !== action.payload
      );
      state.cards = filteredCards;
    },

    addToFavorite(state, action) {
      const newFavoriteCards = state.cards.map(card => {
        if (card.id === action.payload) {
          return { ...card, favorite: !card.favorite };
        }
        return card;
      });
      state.cards = newFavoriteCards;
    },
  },
});

export const {
  addCard,
  increaseCounter,
  addToFavorite,
  decreaseCounter,
  resetCounter,
  deleteCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;
