import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from './errorPage';

describe('Error page', () => {
  it('Renders error page', () => {
    render(<ErrorPage />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Error Page');
  });
});
