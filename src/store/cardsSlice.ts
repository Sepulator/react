import { createSlice } from '@reduxjs/toolkit';

import { IFormResult } from '@/components/card-form/cardform';

export interface CardState {
  items: { [id: string]: IFormResult };
}

const initialState: CardState = {
  items: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export default cardsSlice.reducer;
