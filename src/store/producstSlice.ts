import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Product } from '@/types/data';

export interface IProductsState {
  products: Product[];
  searchText: string;
}

const initialState: IProductsState = {
  products: [],
  searchText: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { setSearchText } = productsSlice.actions;
