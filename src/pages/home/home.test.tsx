import { describe, it } from 'vitest';
import { act, screen, waitFor } from '@testing-library/react';
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
    const user = userEvent.setup();
    renderWithProviders(<Home />);

    const searchBar = screen.getByRole('searchbox');
    await user.type(searchBar, 'JavaScript');
    expect(searchBar).toHaveValue('JavaScript');
  });

  it('Submit empty value', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Home />);

    const submitButton = screen.getByTestId('search-btn');
    const searchBar = screen.getByRole('searchbox');

    await user.type(searchBar, 'JavaScript');
    await user.click(submitButton);
    waitFor(() => expect(screen.getByText('Nothing to display')).toBeInTheDocument());
  });

  it('Submit "apple" value', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Home />);

    const submitButton = screen.getByTestId('search-btn');
    const searchBar = screen.getByRole('searchbox');
    act(() => {
      user.type(searchBar, 'apple');
      user.click(submitButton);
    });
    waitFor(() => expect(screen.queryAllByTestId('card-body')).toHaveLength(1));
  });
});
