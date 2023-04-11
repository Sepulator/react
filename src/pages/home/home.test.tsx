import { describe, it } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('Change input value', async () => {
    renderWithProviders(<Home />);

    const searchBar = screen.getByRole('searchbox');
    await userEvent.type(searchBar, 'JavaScript');
    expect(searchBar).toHaveValue('JavaScript');
  });

  it('Submit search value', async () => {
    renderWithProviders(<Home />);

    const searchBar = screen.getByRole('searchbox');
    await userEvent.type(searchBar, 'JavaScript');

    const submitButton = screen.getByTestId('search-btn');
    await userEvent.click(submitButton);
    expect(screen.queryAllByTestId('card-body')).toHaveLength(0);

    await userEvent.type(searchBar, 'apple');
    await userEvent.click(submitButton);
    expect(screen.queryAllByTestId('card-body')).toHaveLength(1);
  });
});
