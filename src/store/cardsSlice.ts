import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICardForm {
  image: string;
  text: string;
  date: string;
  select: string;
  radio: string;
  checkbox: string[];
}

export interface CardState {
  cards: ICardForm[];
}

const initialState: CardState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<ICardForm>) {
      const card = action.payload;
      state.cards.push(card);
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
