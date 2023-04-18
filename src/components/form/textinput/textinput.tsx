import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form/dist/types';
import { IFormInputs } from '../form';

interface Props {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<IFormInputs>;
}

export const TextInput = ({ register, errors }: Props) => {
  return (
    <div className="md-form mb-2">
      <label className="form-label" htmlFor="text">
        Product title
      </label>
      <input
        {...register('text', {
          required: 'Fill product title',
          minLength: { value: 3, message: 'Minimum 3 letters' },
          maxLength: { value: 12, message: 'Maximum 12 letters' },
          pattern: {
            value: /^[a-zA-Z0-9]{3,12}$/,
            message: 'Allowed latin letters or numbers.',
          },
        })}
        type="text"
        id="text"
        className={`form-control ${errors.text ? 'is-invalid' : ''}`}
        placeholder="Enter title of product"
        data-testid="text-input"
      />
      <div className="invalid-feedback">{errors.text?.message}</div>
    </div>
  );
};
