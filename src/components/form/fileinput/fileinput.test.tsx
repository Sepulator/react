import React from 'react';

import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldErrorsImpl } from 'react-hook-form/dist/types';

import { FileInput } from './fileinput';
import { IFormInputs } from '../form';

describe('File input component', () => {
  const register = vi.fn();
  const setValue = vi.fn();
  const showPicture = vi.fn();
  const errors = 'Error' as FieldErrorsImpl<IFormInputs>;
  const picture = true;

  it('Render file input', () => {
    render(
      <FileInput
        register={register}
        errors={errors}
        showPicture={showPicture}
        setValue={setValue}
        picture={picture}
      />
    );
    expect(screen.getByText('Add a photo')).toBeInTheDocument();
  });
});
