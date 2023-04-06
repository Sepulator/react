import React from 'react';

import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldErrorsImpl } from 'react-hook-form/dist/types';

import { CheckboxInput } from './checkboxinput';
import { IFormInputs } from '../form';

describe('Checkbox input component', () => {
  const register = vi.fn();
  const errors = 'Error' as FieldErrorsImpl<IFormInputs>;

  it('Render checkbox input', () => {
    render(<CheckboxInput register={register} errors={errors} />);
    expect(screen.getAllByRole('checkbox').length).toBe(3);
  });
});
