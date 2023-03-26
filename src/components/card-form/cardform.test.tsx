import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardForm, IFormResult } from './cardform';

const imageFile = new File(['hello'], 'hello.png', { type: 'image/png' });

describe('Card Form', () => {
  window.URL.createObjectURL = vi.fn();
  const cardItem: IFormResult = {
    file: imageFile,
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
