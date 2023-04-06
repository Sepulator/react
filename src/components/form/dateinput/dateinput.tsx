import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form/dist/types';
import { IFormInputs } from '../form';

interface Props {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<IFormInputs>;
}

export const DateInput = ({ register, errors }: Props) => {
  return (
    <div className="md-form mb-2 col-md">
      <label className="form-label" htmlFor="date">
        Choose date
      </label>
      <input
        {...register('date', {
          required: 'Select date of manufacture',
          validate: {
            lessThen: (value) =>
              Date.parse(value) <= Date.now() || 'Select a date less than the current one',
          },
        })}
        type="date"
        name="date"
        id="date"
        data-testid="date-input"
        className={`form-control  ${errors.date ? 'is-invalid' : ''}`}
      />
      <div className="invalid-feedback">{errors.date?.message}</div>
    </div>
  );
};
