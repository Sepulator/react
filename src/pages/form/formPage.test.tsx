import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormPage } from './formPage';

describe('Form page', () => {
  it('Renders form page', () => {
    render(<FormPage />);
    expect(screen.getByRole('form')).toHaveLength(12);
  });
});
