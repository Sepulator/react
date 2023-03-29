import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldErrorsImpl } from 'react-hook-form/dist/types';

import { SelectInput, selectOptions } from './selectinut';
import { IFormInputs } from '../form';

describe('Select component', () => {
  const register = vi.fn();
  const errors = 'Error' as FieldErrorsImpl<IFormInputs>;

  it('Render select input', () => {
    render(<SelectInput register={register} errors={errors} />);
    expect(screen.getAllByRole('option').length).toBe(selectOptions.length);
  });
});
