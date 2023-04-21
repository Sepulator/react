import { screen } from '@testing-library/react';

import App from './App';
import { renderWithProviders } from './utils/test-utils';

describe('App', () => {
  it('Render App component', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
