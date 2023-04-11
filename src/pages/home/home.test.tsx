import { describe, it } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';

import { Home } from './home';
import { server } from '@/mocks/server';
import { renderWithProviders } from '@/utils/test-utils';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home page', async () => {
  it('Renders home page with one card from mocked api', async () => {
    renderWithProviders(<Home />);

    await waitFor(() =>
      expect(
        screen.getAllByRole('heading', {
          level: 6,
        })
      ).toHaveLength(1)
    );
  });

  it('Change input value', () => {
    renderWithProviders(<Home />);

    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'JavaScript' },
    });
    waitFor(() => expect(screen.getByText(/JavaScript/)).toBeInTheDocument());
  });

  it('Submit search value', async () => {
    renderWithProviders(<Home />);

    await waitFor(() =>
      expect(
        screen.getAllByRole('heading', {
          level: 6,
        })
      ).toHaveLength(1)
    );
  });
});
