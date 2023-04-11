import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cardsReducer from './cardsSlice';
import productsReducer from './producstSlice';

const rootReducer = combineReducers({
  cards: cardsReducer,
  products: productsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
