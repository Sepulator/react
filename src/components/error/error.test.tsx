import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Error } from './error';

describe('Error', () => {
  it('Renders error page', () => {
    render(<Error />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Error Page');
  });
});
