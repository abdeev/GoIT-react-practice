import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'userCards',
  storage,
  whitelist: ['cards'],
};

const persistedCardsReducer = persistReducer(persistConfig, cardsReducer);

const rootReducer = combineReducers({
  cards: persistedCardsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
