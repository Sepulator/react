import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DateInput } from './dateinput';

describe('Date input component', () => {
  const date = React.createRef<HTMLInputElement>();

  it('Render date input', () => {
    render(<DateInput date={date} validate={true} />);
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  });

  it('Render invalid', () => {
    render(<DateInput date={date} validate={false} />);
    expect(screen.getByTestId('date-input')).toHaveClass('is-invalid');
  });
});
