import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IRadioList, RadioInput } from './radioinput';

describe('Radio component', () => {
  const radio = {
    promo1: React.createRef(),
    promo2: React.createRef(),
    promo3: React.createRef(),
  };
  it('Render radio input', () => {
    render(<RadioInput radio={radio as IRadioList} validate={true} />);
    expect(screen.getAllByRole('radio').length).toBe(3);
  });

  it('Render invalid', () => {
    render(<RadioInput radio={radio as IRadioList} validate={false} />);
    expect(screen.getByRole('radio', { name: '5% promo' })).toHaveClass('is-invalid');
  });
});
