import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { MemoryRouter } from 'react-router-dom';

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
