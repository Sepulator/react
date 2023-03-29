import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Home } from './home';
import products from '../../data/products.json';

describe('Home', () => {
  it('Renders home page with card list', () => {
    render(<Home />);
    expect(
      screen.getAllByRole('heading', {
        level: 6,
      })
    ).toHaveLength(products.length);
  });

  it('Change input value', () => {
    render(<Home />);

    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'JavaScript' },
    });
    waitFor(() => expect(screen.getByText(/JavaScript/)).toBeInTheDocument());
  });
});
