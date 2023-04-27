import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Toast } from './toast';

describe('Toast component', () => {
  it('Render toast', () => {
    render(<Toast />);
    expect(screen.getByText(/card succesfully added/i)).toBeInTheDocument();
  });
});
