import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/types/data';

export interface IProductsState {
  products: { [id: string]: Product };
}

const initialState: IProductsState = {
  products: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
