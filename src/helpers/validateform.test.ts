import { describe, it } from 'vitest';

import { selectOptions } from '@/components/form/selectinput/selectinut';
import {
  gatherFormInputs,
  validateCheckbox,
  validateDate,
  validateFile,
  validateRadio,
  validateSelect,
  validateText,
} from './validateform';
import { IRadioList } from '@/components/form/radioinput/radioinput';
import { ICheckboxList } from '@/components/form/checkboxinput/checkboxinput';
import { IFormInputs } from '@/components/form/form';

describe('Form validation', () => {
  it('Validate file input', () => {
    const imageFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const notImageFile = new File(['hello'], 'hello.avi', { type: 'video/avi' });

    const validFile = {
      current: {
        files: [imageFile],
      },
    };
    const invalidFile = {
      current: {
        files: [notImageFile],
      },
    };

    expect(validateFile(validFile as unknown as React.RefObject<HTMLInputElement>)).toBe(true);
    expect(validateFile(invalidFile as unknown as React.RefObject<HTMLInputElement>)).toBe(false);
  });

  it('Validate text input', () => {
    const validText = {
      current: {
        value: 'title',
      },
    };
    const invalidText = {
      current: {
        value: 'ti',
      },
    };

    expect(validateText(validText as React.RefObject<HTMLInputElement>)).toBe(true);
    expect(validateText(invalidText as React.RefObject<HTMLInputElement>)).toBe(false);
  });

  it('Validate date input', () => {
    const validDate = {
      current: {
        value: '2023-03-22',
      },
    };
    const invalidDate = {
      current: {
        value: '3024-03-22',
      },
    };

    expect(validateDate(validDate as React.RefObject<HTMLInputElement>)).toBe(true);
    expect(validateDate(invalidDate as React.RefObject<HTMLInputElement>)).toBe(false);
  });

  it('Validate select input', () => {
    const validSelect = {
      current: {
        value: selectOptions[0],
      },
    };
    const invalidSelect = {
      current: {
        value: 'abracadabra',
      },
    };

    expect(validateSelect(validSelect as React.RefObject<HTMLSelectElement>)).toBe(true);
    expect(validateSelect(invalidSelect as React.RefObject<HTMLSelectElement>)).toBe(false);
  });

  it('Validate radio input', () => {
    const validSelect = {
      promo1: { current: { checked: false } },
      promo2: { current: { checked: true, value: 'any value' } },
      promo3: { current: { checked: false } },
    };

    const invalidSelect = {
      promo1: { current: { checked: false } },
      promo2: { current: { checked: false } },
      promo3: { current: { checked: false } },
    };

    expect(validateRadio(validSelect as IRadioList)).toBe(true);
    expect(validateRadio(invalidSelect as IRadioList)).toBe(false);
  });

  it('Validate checkbox input', () => {
    const validSelect = {
      exclusive: { current: { checked: true } },
      arrival: { current: { checked: true, value: 'any value' } },
      best: { current: { checked: true } },
    };

    const invalidSelect = {
      exclusive: { current: { checked: false } },
      arrival: { current: { checked: false } },
      best: { current: { checked: false } },
    };

    expect(validateCheckbox(validSelect as ICheckboxList)).toBe(true);
    expect(validateCheckbox(invalidSelect as ICheckboxList)).toBe(false);
  });
  it('Validate gather form inputs', () => {
    const imageFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const form = {
      file: { current: { files: [imageFile] } },
      text: { current: { value: 'Title' } },
      date: { current: { value: '2023-03-22' } },
      select: {
        current: {
          value: selectOptions[0],
        },
      },
      radio: {
        promo1: { current: { checked: false } },
        promo2: { current: { checked: true, value: 'any value' } },
        promo3: { current: { checked: false } },
      },
      checkbox: {
        exclusive: { current: { checked: true, value: 'not a value' } },
        arrival: { current: { checked: true, value: 'any value' } },
        best: { current: { checked: true, value: 'a value' } },
      },
    } as unknown as IFormInputs;

    const resultForm = {
      file: imageFile,
      text: 'Title',
      date: '2023-03-22',
      select: selectOptions[0],
      radio: 'any value',
      checkbox: ['not a value', 'any value', 'a value'],
    } as unknown as IFormInputs;

    expect(gatherFormInputs(form as unknown as IFormInputs)).toStrictEqual(resultForm);
  });
});
