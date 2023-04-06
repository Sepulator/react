import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldErrorsImpl } from 'react-hook-form/dist/types';

import { RadioInput } from './radioinput';
import { IFormInputs } from '../form';

describe('Radio component', () => {
  const register = vi.fn();
  const errors = 'Error' as FieldErrorsImpl<IFormInputs>;

  it('Render radio input', () => {
    render(<RadioInput register={register} errors={errors} />);
    expect(screen.getAllByRole('radio').length).toBe(3);
  });
});
