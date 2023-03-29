import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { About } from './about';

describe('About', () => {
  it('Renders about page', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('About Page');
  });
});
