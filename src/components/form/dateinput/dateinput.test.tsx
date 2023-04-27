import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldErrorsImpl } from 'react-hook-form/dist/types';

import { DateInput } from './dateinput';
import { IFormInputs } from '../form';

describe('Date input component', () => {
  const register = vi.fn();
  const errors = 'Error' as FieldErrorsImpl<IFormInputs>;

  it('Render date input', () => {
    render(<DateInput register={register} errors={errors} />);
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  });
});
