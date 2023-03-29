import React from 'react';

import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TextInput } from './textinput';

describe('Text input component', () => {
  const text = React.createRef<HTMLInputElement>();

  it('Render text input', () => {
    render(<TextInput text={text} validate={true} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
    waitFor(() => expect(screen.getByText('JavaScript')).toBeInTheDocument());
  });

  it('Render invalid', () => {
    render(<TextInput text={text} validate={false} />);
    expect(screen.getByRole('textbox')).toHaveClass('is-invalid');
  });
});
