import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { Form } from './form';
import { renderWithProviders } from '@/utils/test-utils';

describe('Form', () => {
  window.URL.createObjectURL = vi.fn();

  it('Renders Form Component', () => {
    renderWithProviders(<Form />);
    expect(screen.getByRole('form')).toHaveLength(12);
  });
});
