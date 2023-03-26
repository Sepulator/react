import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FileInput } from './fileinput';

describe('File input component', () => {
  // const ref = React.createRef<HTMLInputElement>();
  const imageFile = new File(['hello'], 'hello.png', { type: 'image/png' });
  const ref = {
    current: {
      files: [imageFile],
      value: imageFile,
    },
  };

  it('Render file input', () => {
    render(
      <FileInput file={ref as unknown as React.RefObject<HTMLInputElement>} validate={true} />
    );
    expect(screen.getByText('Add a photo')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('Render invalid', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<FileInput file={ref} validate={false} />);
    expect(screen.getByTestId('file-input')).toHaveClass('is-invalid');
  });
});
