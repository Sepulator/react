import React from 'react';

import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CheckboxInput, ICheckboxList } from './checkboxinput';

describe('Text input component', () => {
  const ref = {
    exclusive: React.createRef(),
    arrival: React.createRef(),
    best: React.createRef(),
  };

  it('Render text input', () => {
    render(<CheckboxInput checkbox={ref as ICheckboxList} validate={true} />);
    expect(screen.getAllByRole('checkbox').length).toBe(3);
  });

  it('Render invalid', () => {
    render(<CheckboxInput checkbox={ref as ICheckboxList} validate={false} />);
    expect(screen.getByRole('checkbox', { name: 'Very exclusive' })).toHaveClass('is-invalid');
  });
});
