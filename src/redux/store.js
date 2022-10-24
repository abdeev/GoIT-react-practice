import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsReducer from './slices/cardsSlice';





const rootReducer = combineReducers({
    cards: cardsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});