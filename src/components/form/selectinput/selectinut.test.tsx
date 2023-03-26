import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SelectInput, selectOptions } from './selectinut';

describe('Select component', () => {
  const select = React.createRef<HTMLSelectElement>();

  it('Render select input', () => {
    render(<SelectInput select={select} validate={true} />);
    expect(screen.getAllByRole('option').length).toBe(selectOptions.length);
  });

  it('Render invalid', () => {
    render(<SelectInput select={select} validate={false} />);
    expect(screen.getByRole('combobox')).toHaveClass('is-invalid');
  });
});
