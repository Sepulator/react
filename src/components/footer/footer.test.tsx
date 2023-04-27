import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

describe('Error', () => {
  it('Renders error page', () => {
    render(<Footer />);
    expect(screen.getByText(/2023/)).toHaveTextContent('2023');
  });
});
