import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { FieldErrorsImpl } from 'react-hook-form/dist/types/';

import { TextInput } from './textinput';
import { IFormInputs } from '../form';

describe('Text input component', () => {
  const register = vi.fn();
  const errors = 'Error' as FieldErrorsImpl<IFormInputs>;

  it('Render text input', () => {
    render(<TextInput register={register} errors={errors} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
    waitFor(() => expect(screen.getByText('JavaScript')).toBeInTheDocument());
  });
});
