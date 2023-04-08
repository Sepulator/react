import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Product, ProductApi } from '@/types/data';

type ApiState = 'LOADING' | 'READY' | 'ERROR';
export interface IProductsState {
  products: Product[];
  searchText: string;
  apiState: ApiState;
}

const initialState: IProductsState = {
  products: [],
  searchText: window.localStorage.getItem('search-text') || '',
  apiState: 'READY',
};

export const fetchProducts = createAsyncThunk('products/apistate', async (search: string) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=24&skip=0`);
  const data = (await response.json()) as ProductApi;
  return data.products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.apiState = 'LOADING';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.apiState = 'READY';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.apiState = 'ERROR';
    });
  },
});

export default productsSlice.reducer;
export const { receivedProducts, setSearchText } = productsSlice.actions;
