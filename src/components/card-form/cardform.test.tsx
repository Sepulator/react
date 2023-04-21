import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CardForm } from './cardform';
import { ICardForm } from '@/store/cardsSlice';

describe('Card Form', () => {
  const cardItem: ICardForm = {
    image: 'imageFile',
    text: 'Title',
    date: 'string',
    select: 'string',
    radio: 'string',
    checkbox: ['2string2', '2string2'],
  };

  it('Renders Card Form Component', () => {
    render(<CardForm {...cardItem} />);
    expect(
      screen.getByRole('heading', {
        level: 6,
      })
    ).toHaveTextContent(cardItem.text);

    expect(screen.getAllByText('2string2').length).toBe(1);
  });
});
