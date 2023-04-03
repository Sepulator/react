import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { Home } from './home';
import { server } from '@/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home', async () => {
  it('Renders home page with one card from api', async () => {
    render(<Home />);

    await waitFor(() =>
      expect(
        screen.getAllByRole('heading', {
          level: 6,
        })
      ).toHaveLength(1)
    );
  });

  it('Change input value', () => {
    render(<Home />);

    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'JavaScript' },
    });
    waitFor(() => expect(screen.getByText(/JavaScript/)).toBeInTheDocument());
  });
});
