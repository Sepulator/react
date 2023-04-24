import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './header';

describe('Header', () => {
  it('Renders header with diaplyed title', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toHaveTextContent('Home Page');
  });
});
