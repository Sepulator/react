import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import productsReducer from './producstSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
