import { ICardForm, addCard } from './cardsSlice';
import cardsReducer from './cardsSlice';

describe('Card slice', () => {
  const card: ICardForm = {
    image: 'image.png',
    date: '2022-01-01',
    text: 'Test of love',
    radio: 'Meow',
    select: 'Woof',
    checkbox: ['Rrrrr'],
  };

  it('should return the initial state', () => {
    expect(cardsReducer(undefined, { type: undefined })).toEqual([]);
  });

  it('should handle a card being added to an empty list', () => {
    const previousState: ICardForm[] = [];
    expect(cardsReducer(previousState, addCard(card))).toEqual([card]);
  });

  it('should handle a todo being added to an existing list', () => {
    const previousState: ICardForm[] = [card];
    expect(cardsReducer(previousState, addCard(card))).toEqual([card, card]);
  });
});
