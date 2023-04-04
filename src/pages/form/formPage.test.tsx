import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormPage } from './formPage';
import { selectOptions } from '@/components/form/selectinput/selectinut';

describe('Form page', () => {
  window.URL.createObjectURL = vi.fn();

  it('Renders form page', () => {
    render(<FormPage />);
    expect(screen.getByRole('form')).toHaveLength(12);
    expect(screen.queryByTestId('card-form')).not.toBeInTheDocument();
  });

  it('Submit form data and create card', async () => {
    render(<FormPage />);

    const image = new File(['image'], 'image.png', { type: 'image/png' });
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();
    await userEvent.upload(fileInput, image);
    waitFor(() => {
      expect(fileInput.files?.length).toEqual(1);
      expect(fileInput.files!.item(0)).toStrictEqual(image);
    });

    const textInput = screen.getByTestId('text-input');
    expect(textInput).toBeInTheDocument();
    await userEvent.type(textInput, 'Title');
    expect(textInput).toHaveValue('Title');

    const dateInput = screen.getByTestId('date-input');
    expect(dateInput).toBeInTheDocument();
    await userEvent.type(dateInput, '2022-03-03');

    const selectInput: HTMLOptionElement[] = screen.getAllByRole('option');
    expect(selectInput.length).toBe(selectOptions.length);

    const selectInputOption = screen.getByRole('combobox');
    await userEvent.selectOptions(selectInputOption, selectOptions[0]);
    expect(selectInputOption).toHaveValue(selectOptions[0]);
    expect(selectInput[0].selected).toBe(true);

    const radioInput = screen.getAllByRole('radio');
    expect(radioInput.length).toBe(3);
    await userEvent.click(radioInput[0]);
    expect(radioInput[0]).toBeChecked();

    const checkBoxInput = screen.getAllByRole('checkbox');
    expect(checkBoxInput.length).toBe(3);
    await userEvent.click(checkBoxInput[0]);
    expect(checkBoxInput[0]).toBeChecked();

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

    const resetButton = screen.getByTestId('reset-button');
    expect(resetButton).toBeInTheDocument();

    await userEvent.click(submitButton);
    waitFor(() => {
      expect(screen.queryByTestId('card-form')).toBeInTheDocument();
    });
  });

  it('Errors messages on empty submit', async () => {
    render(<FormPage />);

    const submitButton = screen.getByTestId('submit-button');
    await userEvent.click(submitButton);

    expect(screen.getByText(/Select image/)).toBeInTheDocument();
    expect(screen.getByText(/Fill product title/)).toBeInTheDocument();
    expect(screen.getByText(/Select date of manufacture/)).toBeInTheDocument();
    expect(screen.getByText(/Select one of available category/)).toBeInTheDocument();
    expect(screen.getByText(/Choose desired discount/)).toBeInTheDocument();
    expect(screen.getByText(/Please select promotions/)).toBeInTheDocument();
  });
});
