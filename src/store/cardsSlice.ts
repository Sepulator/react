import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICardForm {
  image: string;
  text: string;
  date: string;
  select: string;
  radio: string;
  checkbox: string[];
}

const initialState: ICardForm[] = [];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<ICardForm>) {
      const card = action.payload;
      state.push(card);
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
