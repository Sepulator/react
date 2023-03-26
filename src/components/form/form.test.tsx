import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Form } from './form';

describe('Form', () => {
  window.URL.createObjectURL = vi.fn();
  const generateCards = vi.fn();

  it('Renders Form Component', () => {
    render(<Form generateCards={generateCards} />);
    expect(screen.getByRole('form')).toHaveLength(12);
  });
});
