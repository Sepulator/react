import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormPage } from './formPage';

describe('Form page', () => {
  it('Renders form page', () => {
    render(<FormPage />);
    expect(screen.getByRole('form')).toHaveLength(12);
    expect(screen.queryByTestId('card-form')).not.toBeInTheDocument();
  });

  it('Submit form data to create card', async () => {
    render(<FormPage />);

    const image = new File(['image'], 'image.png', { type: 'image/png' });
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();
    await userEvent.upload(fileInput, image);
    expect(fileInput.files![0]).toStrictEqual(image);
    expect(fileInput.files!.item(0)).toStrictEqual(image);
    expect(fileInput.files).toHaveLength(1);

    const textInput = screen.getByTestId('text-input');
    expect(textInput).toBeInTheDocument();
    await userEvent.type(textInput, 'Title');
    expect(screen.getByDisplayValue('Title')).toBeInTheDocument();

    const dateInput = screen.getByTestId('data-input');
    expect(dateInput).toBeInTheDocument();
    await userEvent.type(dateInput, '2022-03-03');
  });
});
