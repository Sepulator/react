import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cardsReducer from './cardsSlice';
import productsReducer from './producstSlice';
import { productApi } from './api';

const rootReducer = combineReducers({
  cards: cardsReducer,
  products: productsReducer,
  [productApi.reducerPath]: productApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
  });
};

export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
